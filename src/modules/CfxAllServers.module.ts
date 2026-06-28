import axios from "axios"
import { Root, Type } from "protobufjs/light"
import { CFX_SERVERS_STREAM, CfxServerFilters } from "../types"
import { masterSchema } from "../proto/masterSchema"
import CitizenServer from "../models/CfxCitizenServer"

export default class CfxAllServersModule {
    static instance: CfxAllServersModule | null = null

    private serverType: Type

    constructor() {
        const root = Root.fromJSON(masterSchema)
        this.serverType = root.lookupType("master.Server")
    }

    static get() {
        if (this.instance === null) this.instance = new CfxAllServersModule()
        return this.instance
    }

    private static normalize(data: Record<string, unknown>) {
        if (data.svMaxclients !== undefined && data.sv_maxclients === undefined) {
            data.sv_maxclients = data.svMaxclients
        }
        return data
    }

    private static matches(server: CitizenServer, filters: CfxServerFilters) {
        if (filters.locale && server.locale !== filters.locale) return false
        if (filters.gametype && server.gameType !== filters.gametype)
            return false
        if (filters.mapname && server.mapName !== filters.mapname) return false
        if (
            filters.minPlayers !== undefined &&
            server.playersCount < filters.minPlayers
        )
            return false
        if (
            filters.maxPlayers !== undefined &&
            server.playersCount > filters.maxPlayers
        )
            return false
        if (filters.tag && !server.hasTag(filters.tag)) return false
        if (filters.onlyOpen && server.isFull) return false
        if (filters.search) {
            const needle = filters.search.toLowerCase()
            if (!server.hostname.toLowerCase().includes(needle)) return false
        }
        return true
    }

    async retrieve(filters: CfxServerFilters = {}): Promise<CitizenServer[]> {
        try {
            const response = await axios.get(CFX_SERVERS_STREAM, {
                headers: { "User-Agent": "Mozilla/5.0" },
                responseType: "arraybuffer",
                maxContentLength: Infinity,
                maxBodyLength: Infinity,
            })

            const buffer = Buffer.from(response.data)
            const servers: CitizenServer[] = []
            let offset = 0

            while (offset + 4 <= buffer.length) {
                const length = buffer.readUInt32LE(offset)
                offset += 4
                if (length === 0 || offset + length > buffer.length) break

                const slice = buffer.subarray(offset, offset + length)
                offset += length

                const decoded = this.serverType.decode(slice)
                const object = this.serverType.toObject(decoded, {
                    defaults: true,
                    arrays: true,
                    objects: true,
                    longs: Number,
                }) as { EndPoint: string; Data: Record<string, unknown> }

                if (!object.Data) continue

                const server = new CitizenServer({
                    EndPoint: object.EndPoint,
                    Data: CfxAllServersModule.normalize(object.Data),
                } as never)

                if (!CfxAllServersModule.matches(server, filters)) continue

                servers.push(server)

                if (filters.limit && servers.length >= filters.limit) break
            }

            return servers
        } catch (error) {
            throw new Error("Unable to retrieve the server list", { cause: error })
        }
    }
}

import axios from "axios"
import {
    CfxServerInfo,
    CfxServerDynamic,
    CfxServerPlayers,
} from "../types"

export default class CfxDirectServerModule {
    static instance: CfxDirectServerModule | null = null

    static get() {
        if (this.instance === null) this.instance = new CfxDirectServerModule()
        return this.instance
    }

    private static base(address: string) {
        if (address.startsWith("http://") || address.startsWith("https://")) {
            return address.replace(/\/$/, "")
        }
        return `http://${address}`
    }

    private async fetch<T>(address: string, file: string): Promise<T> {
        const response = await axios.get(
            `${CfxDirectServerModule.base(address)}/${file}`,
            {
                headers: { "User-Agent": "Mozilla/5.0" },
                timeout: 10000,
            }
        )
        return response.data as T
    }

    async info(address: string): Promise<CfxServerInfo> {
        try {
            return await this.fetch<CfxServerInfo>(address, "info.json")
        } catch (error) {
            throw new Error("Unable to reach the server info endpoint", { cause: error })
        }
    }

    async dynamic(address: string): Promise<CfxServerDynamic> {
        try {
            return await this.fetch<CfxServerDynamic>(address, "dynamic.json")
        } catch (error) {
            throw new Error("Unable to reach the server dynamic endpoint", { cause: error })
        }
    }

    async players(address: string): Promise<CfxServerPlayers> {
        try {
            return await this.fetch<CfxServerPlayers>(address, "players.json")
        } catch (error) {
            throw new Error("Unable to reach the server players endpoint", { cause: error })
        }
    }
}

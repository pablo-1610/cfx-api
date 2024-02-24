import { CFX_PINNED_SERVERS } from "../types"
import CfxPinnedServers from "../models/CfxPinnedServers"
import axios from "axios"

export default class CfxPinnedServersModule {
    static instance: CfxPinnedServersModule | null = null

    static get() {
        if (this.instance === null) this.instance = new CfxPinnedServersModule()
        return this.instance
    }

    async retrieve(): Promise<CfxPinnedServers | undefined> {
        try {
            const response = await axios.get(CFX_PINNED_SERVERS, {
                headers: { "User-Agent": "Mozilla" },
            })

            return new CfxPinnedServers(response.data)
        } catch (error) {
            throw new Error("Internal error occurred")
        }
    }
}

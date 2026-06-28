import { CFX_FEATURED_SERVERS } from "../types"
import CfxFeaturedServers from "../models/CfxFeaturedServers"
import axios from "axios"

export default class CfxFeaturedServersModule {
    static instance: CfxFeaturedServersModule | null = null

    static get() {
        if (this.instance === null)
            this.instance = new CfxFeaturedServersModule()
        return this.instance
    }

    async retrieve(): Promise<CfxFeaturedServers> {
        try {
            const response = await axios.get(CFX_FEATURED_SERVERS, {
                headers: { "User-Agent": "Mozilla/5.0" },
            })

            return new CfxFeaturedServers(response.data)
        } catch (error) {
            throw new Error("Unable to retrieve featured servers", { cause: error })
        }
    }
}

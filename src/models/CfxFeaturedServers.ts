import {
    CfxFeaturedServerEntry,
    CfxFeaturedServersResponse,
} from "../types"

export default class CfxFeaturedServers {
    homePageServer: CfxFeaturedServerEntry
    entries: CfxFeaturedServerEntry[]

    constructor(response: CfxFeaturedServersResponse) {
        this.homePageServer = response.home_page_server
        this.entries = response.servers ?? []
    }

    get singles() {
        return this.entries.filter((entry) => entry.type === "single")
    }

    get collections() {
        return this.entries.filter((entry) => entry.type === "collection")
    }

    get allIds() {
        const ids: string[] = []
        if (this.homePageServer?.hash_id) ids.push(this.homePageServer.hash_id)
        for (const entry of this.entries) {
            if (entry.hash_id) ids.push(entry.hash_id)
            if (entry.hash_ids) ids.push(...entry.hash_ids)
        }
        return [...new Set(ids)]
    }
}

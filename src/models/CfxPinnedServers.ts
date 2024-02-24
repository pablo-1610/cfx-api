import { CfxPinnedServersResponse } from "../types/CfxPinnedServers"

export default class CfxPinnedServers {
    pinIfEmpty: boolean
    pinnedServers: string[]
    noAdServerId: string
    noAdServer: {
        title: string,
        ids: string[]
    }

    constructor(summary: CfxPinnedServersResponse) {
        this.pinIfEmpty = summary.pinIfEmpty
        this.pinnedServers = summary.pinnedServers
        this.noAdServerId = summary.noAdServerId
        this.noAdServer = summary.noAdServer
    }
}

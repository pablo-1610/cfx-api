export interface CfxPinnedServersResponse {
    pinIfEmpty: boolean
    pinnedServers: string[]
    noAdServerId: string
    noAdServer: {
        title: string,
        ids: string[]
    }
}

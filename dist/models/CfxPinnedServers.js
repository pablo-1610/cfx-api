"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CfxPinnedServers {
    pinIfEmpty;
    pinnedServers;
    noAdServerId;
    noAdServer;
    constructor(summary) {
        this.pinIfEmpty = summary.pinIfEmpty;
        this.pinnedServers = summary.pinnedServers;
        this.noAdServerId = summary.noAdServerId;
        this.noAdServer = summary.noAdServer;
    }
}
exports.default = CfxPinnedServers;

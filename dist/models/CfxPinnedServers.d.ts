import { CfxPinnedServersResponse } from "../types";
export default class CfxPinnedServers {
    pinIfEmpty: boolean;
    pinnedServers: string[];
    noAdServerId: string;
    noAdServer: {
        title: string;
        ids: string[];
    };
    constructor(summary: CfxPinnedServersResponse);
}

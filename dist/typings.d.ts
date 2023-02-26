export declare const AxiosOptions: {
    headers: {
        'User-Agent': string;
    };
};
declare interface CfxSummaryStatus {
    description: string;
    indicator: string;
}
export interface CfxSummary {
    status: CfxSummaryStatus;
}
export interface CfxCitizenPlayerPayload {
    endpoint: string;
    id: number;
    identifiers: string[];
    name: string;
    ping: number;
}
export interface CfxCitizenServerDataPublicVariables {
    onesync_enabled: string;
    element_club: string;
    tags: string[];
    sv_projectName: string;
    sv_projectDesc: string;
}
export interface CfxCitizenServerDataData {
    clients: number;
    players: CfxCitizenPlayerPayload[];
    gametype: string;
    hostname: string;
    mapname: string;
    sv_maxclients: number;
    enhancedHostSupport: boolean;
    resources: string[];
    server: string;
    vars: CfxCitizenServerDataPublicVariables;
    selfReportedClients: number;
    ownerID: number;
    private: boolean;
    fallback: boolean;
    connectEndPoints: string[];
    upvotePower: number;
    burstPower: number;
    support_status: string;
    ownerName: string;
    ownerProfile: string;
    ownerAvatar: string;
    lastSeen: string;
    iconVersion: number;
}
export interface CfxCitizenServerData {
    EndPoint: string;
    Data: CfxCitizenServerDataData;
}
export interface CfxStatusComponentData {
    id: string;
    name: string;
    status: string;
    created_at: string;
    updated_at: string;
    position: number;
    description: string;
    showcase: boolean;
    start_date: string;
    group_id: string;
    page_id: string;
    group: string;
    only_show_if_degraded: boolean;
}
export declare const CFX_MASTERLIST = "https://servers-frontend.fivem.net/api/servers/single/";
export declare const CFX_STATUS_SUMMARY = "https://status.cfx.re/api/v2/status.json";
export declare const CFX_STATUS_COMPONENTS = "https://status.cfx.re/api/v2/components.json";
export declare const NONE = "none";
export declare const AURUM = "au";
export declare const ARGENTUM = "ag";
export declare const PLATINUM = "pl";
export {};

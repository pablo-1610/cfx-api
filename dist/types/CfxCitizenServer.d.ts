import { CfxCitizenPlayerPayload } from "./CfxCitizenPlayer";
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

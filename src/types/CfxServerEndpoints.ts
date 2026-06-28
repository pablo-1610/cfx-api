import { CfxCitizenPlayerPayload } from "./CfxCitizenPlayer"
import { CfxCitizenServerDataPublicVariables } from "./CfxCitizenServer"

export interface CfxServerInfo {
    enhancedHostSupport: boolean
    icon?: string
    requestSteamTicket?: string
    resources: string[]
    server: string
    vars: CfxCitizenServerDataPublicVariables
    version: number
}

export interface CfxServerDynamic {
    clients: number
    gametype: string
    hostname: string
    iv: string
    mapname: string
    sv_maxclients: string
}

export type CfxServerPlayers = CfxCitizenPlayerPayload[]

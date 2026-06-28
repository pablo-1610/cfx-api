import {
    NONE,
    CfxCitizenServerData,
    CfxCitizenServerDataData,
} from "../types"

export default class CitizenServer {
    id: string
    data: CfxCitizenServerDataData

    constructor(data: CfxCitizenServerData) {
        this.id = data.EndPoint
        this.data = data.Data
    }

    get playersCount() {
        return this.data.clients
    }

    get players() {
        return this.data.players
    }

    get gameType() {
        return this.data.gametype
    }

    get hostname() {
        return this.data.hostname
    }

    get mapName() {
        return this.data.mapname
    }

    get maxPlayers() {
        return this.data.sv_maxclients
    }

    get enhancedHostSupport() {
        return this.data.enhancedHostSupport
    }

    get resources() {
        return this.data.resources
    }

    get serverVersion() {
        return this.data.server
    }

    get publicVariables() {
        return this.data.vars
    }

    get playersCountFromServerReport() {
        return this.data.selfReportedClients
    }

    get ownerId() {
        return this.data.ownerID
    }

    get private() {
        return this.data.private
    }

    get fallback() {
        return this.data.fallback
    }

    get connectedEndpoints() {
        return this.data.connectEndPoints
    }

    get upvotePower() {
        return this.data.upvotePower
    }

    get burstPower() {
        return this.data.burstPower
    }

    get supported() {
        return this.data.support_status
    }

    get ownerName() {
        return this.data.ownerName
    }

    get ownerProfileUrl() {
        return this.data.ownerProfile
    }

    get ownerAvatarUrl() {
        return this.data.ownerAvatar
    }

    get lastSeenDate() {
        return this.data.lastSeen
    }

    get iconVersion() {
        return this.data.iconVersion
    }

    get isOneSyncEnabled() {
        return this.publicVariables.onesync_enabled === "true"
    }

    get elementClub() {
        return this.publicVariables.element_club ?? NONE
    }

    get tags() {
        if (!this.publicVariables.tags) {
            return []
        }
        return this.publicVariables.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag.length > 0)
    }

    get projectName() {
        return this.publicVariables.sv_projectName ?? undefined
    }

    get projectDesc() {
        return this.publicVariables.sv_projectDesc ?? undefined
    }

    get isFull() {
        return this.playersCount >= this.maxPlayers
    }

    get joinUrl() {
        return `https://cfx.re/join/${this.id}`
    }

    get connectEndpoint() {
        return this.connectedEndpoints?.[0]
    }

    get locale() {
        return this.publicVariables.locale ?? undefined
    }

    get bannerConnecting() {
        return this.publicVariables.banner_connecting ?? undefined
    }

    get bannerDetail() {
        return this.publicVariables.banner_detail ?? undefined
    }

    get gameName() {
        return this.publicVariables.gamename ?? undefined
    }

    get isRedM() {
        return this.gameName === "rdr3"
    }

    get isFiveM() {
        return this.gameName === "gta5"
    }

    get pureLevel() {
        const level = this.publicVariables.sv_pureLevel
        return level ? Number(level) : 0
    }

    get iconUrl() {
        if (this.iconVersion === undefined) return undefined
        return `https://frontend.cfx-services.net/api/servers/icon/${this.id}/${this.iconVersion}.png`
    }

    hasResource(resource: string) {
        return this.resources.includes(resource)
    }

    hasAnyResourceStartingWith(resource: string) {
        return this.resources.some((r) => r.startsWith(resource))
    }

    hasTag(tag: string) {
        return this.tags.includes(tag)
    }

    isPlayerOnline(name: string) {
        return this.players.some((player) => player.name === name)
    }
}

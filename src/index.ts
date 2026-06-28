import CfxStatusModule from "./modules/CfxStatus.module"
import CfxCitizenServerModule from "./modules/CfxCitizenServer.module"
import CfxUnresolvedIncidentsModule from "./modules/CfxUnresolvedIncidents.module"
import CfxFeaturedServersModule from "./modules/CfxFeaturedServers.module"
import CfxAllServersModule from "./modules/CfxAllServers.module"
import CfxServerIconModule from "./modules/CfxServerIcon.module"
import CfxDirectServerModule from "./modules/CfxDirectServer.module"

import CitizenServer from "./models/CfxCitizenServer"
import CfxCitizenPlayer from "./models/CfxCitizenPlayer"
import CfxStatus from "./models/CfxStatus"
import CfxStatusComponent from "./models/CfxStatusComponent"
import CfxUnresolvedIncidents from "./models/CfxUnresolvedIncidents"
import CfxFeaturedServers from "./models/CfxFeaturedServers"

import { CfxServerFilters } from "./types"

export * from "./types"
export {
    CitizenServer,
    CfxCitizenPlayer,
    CfxStatus,
    CfxStatusComponent,
    CfxUnresolvedIncidents,
    CfxFeaturedServers,
}

export const servers = {
    all(filters: CfxServerFilters = {}) {
        return CfxAllServersModule.get().retrieve(filters)
    },
    single(id: string) {
        return CfxCitizenServerModule.get().retrieve(id)
    },
    featured() {
        return CfxFeaturedServersModule.get().retrieve()
    },
    icon(id: string, iconVersion: number) {
        return CfxServerIconModule.get().retrieve(id, iconVersion)
    },
    iconUrl(id: string, iconVersion: number) {
        return CfxServerIconModule.get().buildUrl(id, iconVersion)
    },
    info(address: string) {
        return CfxDirectServerModule.get().info(address)
    },
    dynamic(address: string) {
        return CfxDirectServerModule.get().dynamic(address)
    },
    players(address: string) {
        return CfxDirectServerModule.get().players(address)
    },
}

export const status = {
    get() {
        return CfxStatusModule.get().retrieve()
    },
    unresolvedIncidents() {
        return CfxUnresolvedIncidentsModule.get().retrieve()
    },
}

export async function fetchServer(id: string) {
    return servers.single(id)
}

export async function fetchAllServers(filters: CfxServerFilters = {}) {
    return servers.all(filters)
}

export async function fetchFeaturedServers() {
    return servers.featured()
}

export async function fetchServerIcon(id: string, iconVersion: number) {
    return servers.icon(id, iconVersion)
}

export async function fetchStatus() {
    return status.get()
}

export async function fetchUnresolvedIncidents() {
    return status.unresolvedIncidents()
}

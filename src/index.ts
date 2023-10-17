import CfxStatusModule from "./modules/CfxStatus.module"
import CfxCitizenServerModule from "./modules/CfxCitizenServer.module"
import CfxUnresolvedIncidentsModule from "./modules/CfxUnresolvedIncidents.module"
import CfxPinnedServersModule from "./modules/CfxPinnedServers.module"
export * from "./types"

export async function fetchServer(id: string) {
    return await CfxCitizenServerModule.get().retrieve(id)
}

export async function fetchStatus() {
    return await CfxStatusModule.get().retrieve()
}

export async function fetchUnresolvedIncidents() {
    return await CfxUnresolvedIncidentsModule.get().retrieve()
}

export async function fetchPinnedServers() {
    return await CfxPinnedServersModule.get().retrieve()
}
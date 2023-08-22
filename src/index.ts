import CfxStatusModule from "./modules/CfxStatus.module"
import CfxCitizenServerModule from "./modules/CfxCitizenServer.module"
import CfxUnresolvedIncidentsModule from "./modules/CfxUnresolvedIncidents.module"
import CfxActiveScheduledMaintenancesModule from "./modules/CfxActiveScheduledMaintenances.module"
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

export async function fetchActiveScheduledMaintenances() {
    return await CfxActiveScheduledMaintenancesModule.get().retrieve()
}
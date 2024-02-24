import { CfxUnresolvedIncidentsType, CfxUnresolvedIncidentsPage } from "../types"

export default class CfxUnresolvedIncidents {
    page: CfxUnresolvedIncidentsPage
    incidents: any[]

    constructor(payload: CfxUnresolvedIncidentsType) {
        this.page = payload.page
        this.incidents = payload.incidents
    }
}

import { CfxUnresolvedIncidentsType, CfxUnresolvedIncidentsPage } from "../types";
export default class CfxUnresolvedIncidents {
    page: CfxUnresolvedIncidentsPage;
    incidents: any[];
    constructor(payload: CfxUnresolvedIncidentsType);
}

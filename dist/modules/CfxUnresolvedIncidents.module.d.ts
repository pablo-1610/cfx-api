import CfxUnresolvedIncidents from "../models/CfxUnresolvedIncidents";
export default class CfxUnresolvedIncidentsModule {
    static instance: CfxUnresolvedIncidentsModule | null;
    static get(): CfxUnresolvedIncidentsModule;
    retrieve(): Promise<CfxUnresolvedIncidents | undefined>;
}

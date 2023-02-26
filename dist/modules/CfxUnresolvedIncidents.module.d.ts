import { CfxUnresolvedIncidents } from "../types";
export default class CfxUnresolvedIncidentsModule {
    static instance: CfxUnresolvedIncidentsModule | null;
    static get(): CfxUnresolvedIncidentsModule;
    retrieve(): Promise<CfxUnresolvedIncidents | undefined>;
}

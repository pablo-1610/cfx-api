declare interface CfxUnresolvedIncidentsPage {
    id: string;
    name: string;
    url: string;
    time_zone: string;
    updated_at: string;
}
export interface CfxUnresolvedIncidents {
    page: CfxUnresolvedIncidentsPage;
    incidents: any[];
}
export {};

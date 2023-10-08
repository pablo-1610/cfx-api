export interface CfxUnresolvedIncidentsPage {
    id: string;
    name: string;
    url: string;
    time_zone: string;
    updated_at: string;
}
export interface CfxUnresolvedIncidentsType {
    page: CfxUnresolvedIncidentsPage;
    incidents: any[];
}

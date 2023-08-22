declare interface CfxActiveScheduledMaintenanceUpdate {
    body: string;
    created_at: string;
    display_at: string;
    id: string;
    incident_id: string;
    status: string;
    updated_at: string;
}
export interface CfxActiveScheduledMaintenances {
    createdAt: string;
    id: string;
    impact: string;
    incident_updates: CfxActiveScheduledMaintenanceUpdate[];
    monitoring_at: (string | null);
    name: string;
    page_id: string;
    resolved_at: (string | null);
    scheduled_for: string;
    scheduled_until: string;
    shortlink: string;
    status: string;
    updated_at: string;
}
export {};

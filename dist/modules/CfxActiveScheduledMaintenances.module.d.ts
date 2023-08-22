import { CfxActiveScheduledMaintenances } from '../types';
export default class CfxActiveScheduledMaintenancesModule {
    static instance: CfxActiveScheduledMaintenancesModule | null;
    static get(): CfxActiveScheduledMaintenancesModule;
    retrieve(): Promise<CfxActiveScheduledMaintenances | undefined>;
}

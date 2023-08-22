import { CfxActiveScheduledMaintenances, CFX_STATUS_SCHEDULED_MAINTENANCES_ACTIVE } from '../types';
import axios from 'axios';

export default class CfxActiveScheduledMaintenancesModule
{
    static instance: CfxActiveScheduledMaintenancesModule | null = null;

    static get()
    {
        if (this.instance === null) this.instance = new CfxActiveScheduledMaintenancesModule()
        return this.instance
    }

    async retrieve(): Promise<CfxActiveScheduledMaintenances | undefined>
    {
        const response = await axios.get(CFX_STATUS_SCHEDULED_MAINTENANCES_ACTIVE, {
            headers: { "User-Agent": "cfx" },
        })
        if (response.status !== 200)
            throw new Error("Error while retrieving Cfx.re status")
        return response.data
    }
}
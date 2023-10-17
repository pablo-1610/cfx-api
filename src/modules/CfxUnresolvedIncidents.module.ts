import { CFX_STATUS_UNRESOLVED } from "../types"
import CfxUnresolvedIncidents from "../models/CfxUnresolvedIncidents"
import axios from "axios"

export default class CfxUnresolvedIncidentsModule {
    static instance: CfxUnresolvedIncidentsModule | null = null

    static get() {
        if (this.instance === null) this.instance = new CfxUnresolvedIncidentsModule()
        return this.instance
    }

    async retrieve(): Promise<CfxUnresolvedIncidents | undefined> {
        try {
            const response = await axios.get(CFX_STATUS_UNRESOLVED, {
                headers: { "User-Agent": "cfx" },
            })

            return new CfxUnresolvedIncidents(response.data)
        } catch (error) {
            throw new Error("Error while retrieving Cfx.re unresolved incidents")
        }
    }
}

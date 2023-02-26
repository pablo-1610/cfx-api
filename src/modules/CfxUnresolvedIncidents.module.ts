import { CfxUnresolvedIncidents, CFX_STATUS_UNRESOLVED } from "../types"
import axios from "axios"

export default class CfxUnresolvedIncidentsModule {
    static instance: CfxUnresolvedIncidentsModule | null = null

    static get() {
        if (this.instance === null) this.instance = new CfxUnresolvedIncidentsModule()
        return this.instance
    }

    async retrieve(): Promise<CfxUnresolvedIncidents | undefined> {
        const response = await axios.get(CFX_STATUS_UNRESOLVED, {
            headers: { "User-Agent": "cfx" },
        })
        if (response.status !== 200)
            throw new Error("Error while retrieving Cfx.re status")
        return response.data
    }
}

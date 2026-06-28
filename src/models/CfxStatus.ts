import {
    CfxStatusComponentData,
    CfxSummary,
    CFX_STATUS_COMPONENTS,
} from "../types"
import CfxStatusComponent from "./CfxStatusComponent"
import axios from "axios"

export default class CfxStatus {
    description: string
    level: string

    constructor(summary: CfxSummary) {
        this.description = summary.status.description
        this.level = summary.status.indicator
    }

    get everythingOk(): boolean {
        return this.level === "none"
    }

    async fetchComponents(): Promise<CfxStatusComponent[]> {
        const response = await axios.get(CFX_STATUS_COMPONENTS, {
            headers: { "User-Agent": "Mozilla/5.0" },
        })
        if (response.status !== 200)
            throw new Error("Cannot retrieve Cfx.re components status")
        return (response.data.components as CfxStatusComponentData[]).map(
            (component) => new CfxStatusComponent(component)
        )
    }
}

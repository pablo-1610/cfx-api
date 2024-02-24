import { CFX_STATUS_SUMMARY } from "../types"
import CfxStatus from "../models/CfxStatus"
import axios from "axios"

export default class CfxStatusModule {
    static instance: CfxStatusModule | null = null

    static get() {
        if (this.instance === null) this.instance = new CfxStatusModule()
        return this.instance
    }

    async retrieve(): Promise<CfxStatus | undefined> {
        try {
            const response = await axios.get(CFX_STATUS_SUMMARY, {
                headers: { "User-Agent": "Mozilla" },
            })

            return new CfxStatus(response.data)
        } catch (error) {
            throw new Error("Error while retrieving Cfx.re status")
        }
    }
}

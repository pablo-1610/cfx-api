import { CFX_MASTERLIST } from "../types"
import CfxCitizenServer from "../models/CfxCitizenServer"
import axios from "axios"

export default class CfxCitizenServerModule {
    static instance: CfxCitizenServerModule | null = null

    static get() {
        if (this.instance === null) this.instance = new CfxCitizenServerModule()
        return this.instance
    }

    async retrieve(id: string): Promise<CfxCitizenServer | undefined> {
        try {
            const response = await axios.get(CFX_MASTERLIST + id, {
                headers: { "User-Agent": "cfx" },
            })

            return new CfxCitizenServer(response.data)
        } catch (error) {
            throw new Error("Server not found or internal error occurred")
        }
    }
}

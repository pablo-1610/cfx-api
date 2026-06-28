import { CFX_SERVER_ICON } from "../types"
import axios from "axios"

export default class CfxServerIconModule {
    static instance: CfxServerIconModule | null = null

    static get() {
        if (this.instance === null) this.instance = new CfxServerIconModule()
        return this.instance
    }

    buildUrl(id: string, iconVersion: number) {
        return `${CFX_SERVER_ICON}${id}/${iconVersion}.png`
    }

    async retrieve(id: string, iconVersion: number): Promise<Buffer> {
        try {
            const response = await axios.get(this.buildUrl(id, iconVersion), {
                headers: { "User-Agent": "Mozilla/5.0" },
                responseType: "arraybuffer",
            })

            return Buffer.from(response.data)
        } catch (error) {
            throw new Error("Unable to retrieve the server icon", { cause: error })
        }
    }
}

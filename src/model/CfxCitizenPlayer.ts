import { CfxCitizenPlayerPayload } from "../typings"

export default class CfxCitizenPlayer {
    endpoint: string
    id: number
    identifiers: string[]
    name: string
    ping: number

    constructor(payload: CfxCitizenPlayerPayload) {
        this.endpoint = payload.endpoint
        this.id = payload.id
        this.identifiers = payload.identifiers
        this.name = payload.name
        this.ping = payload.ping
    }
}

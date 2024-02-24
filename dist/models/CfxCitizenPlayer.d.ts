import { CfxCitizenPlayerPayload } from "../types";
export default class CfxCitizenPlayer {
    endpoint: string;
    id: number;
    identifiers: string[];
    name: string;
    ping: number;
    constructor(payload: CfxCitizenPlayerPayload);
}

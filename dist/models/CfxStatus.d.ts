import { CfxStatusComponentData, CfxSummary } from "../types";
export default class CfxStatus {
    description: string;
    level: string;
    constructor(summary: CfxSummary);
    get everythingOk(): boolean;
    fetchComponents(): Promise<CfxStatusComponentData[]>;
}

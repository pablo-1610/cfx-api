import CfxStatus from "../models/CfxStatus";
export default class CfxStatusModule {
    static instance: CfxStatusModule | null;
    static get(): CfxStatusModule;
    retrieve(): Promise<CfxStatus | undefined>;
}

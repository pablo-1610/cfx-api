import CfxStatus from "../model/CfxStatus";
export default class CfxStatusModule {
    static instance: CfxStatusModule | null;
    static get(): CfxStatusModule;
    retrieve(): Promise<CfxStatus | undefined>;
}

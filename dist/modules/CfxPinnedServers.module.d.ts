import CfxPinnedServers from "../models/CfxPinnedServers";
export default class CfxPinnedServersModule {
    static instance: CfxPinnedServersModule | null;
    static get(): CfxPinnedServersModule;
    retrieve(): Promise<CfxPinnedServers | undefined>;
}

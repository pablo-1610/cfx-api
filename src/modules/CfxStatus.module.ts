import { AxiosOptions, CFX_STATUS_SUMMARY } from "../typings";
import CfxStatus from "../model/CfxStatus";
import axios from "axios";

export default class CfxStatusModule {
  static instance: CfxStatusModule | null = null;

  static get() {
    if (this.instance === null) this.instance = new CfxStatusModule();
    return this.instance;
  }

  async retrieve(): Promise<CfxStatus | undefined> {
    const response = await axios.get(CFX_STATUS_SUMMARY, AxiosOptions);
    if (response.status !== 200)
      throw new Error("Error while retrieving Cfx.re status");
    return new CfxStatus(response.data);
  }
}

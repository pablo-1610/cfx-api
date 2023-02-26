import { AxiosOptions, CFX_MASTERLIST } from "../typings";
import CfxCitizenServer from "../model/CfxCitizenServer";
import axios from "axios";

export default class CfxCitizenServerModule {
  static instance: CfxCitizenServerModule | null = null;

  static get() {
    if (this.instance === null) this.instance = new CfxCitizenServerModule();
    return this.instance;
  }

  async retrieve(id: string): Promise<CfxCitizenServer | undefined> {
    const response = await axios.get(CFX_MASTERLIST + id, AxiosOptions);
    if (response.status !== 200)
      throw new Error("Server not found or internal error occurred");
    return new CfxCitizenServer(response.data);
  }
}

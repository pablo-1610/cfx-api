import CfxStatusModule from "./modules/CfxStatus.module"
import CfxCitizenServerModule from "./modules/CfxCitizenServer.module"

export async function fetchServer(id: string) {
  return await CfxCitizenServerModule.get().retrieve(id);
}

export async function fetchStatus() {
  return await CfxStatusModule.get().retrieve();
}

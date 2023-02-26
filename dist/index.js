"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchStatus = exports.fetchServer = void 0;
const CfxStatus_module_1 = __importDefault(require("./modules/CfxStatus.module"));
const CfxCitizenServer_module_1 = __importDefault(require("./modules/CfxCitizenServer.module"));
async function fetchServer(id) {
    return await CfxCitizenServer_module_1.default.get().retrieve(id);
}
exports.fetchServer = fetchServer;
async function fetchStatus() {
    return await CfxStatus_module_1.default.get().retrieve();
}
exports.fetchStatus = fetchStatus;

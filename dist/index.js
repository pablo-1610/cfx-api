"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUnresolvedIncidents = exports.fetchStatus = exports.fetchServer = void 0;
const CfxStatus_module_1 = __importDefault(require("./modules/CfxStatus.module"));
const CfxCitizenServer_module_1 = __importDefault(require("./modules/CfxCitizenServer.module"));
const CfxUnresolvedIncidents_module_1 = __importDefault(require("./modules/CfxUnresolvedIncidents.module"));
__exportStar(require("./types"), exports);
async function fetchServer(id) {
    return await CfxCitizenServer_module_1.default.get().retrieve(id);
}
exports.fetchServer = fetchServer;
async function fetchStatus() {
    return await CfxStatus_module_1.default.get().retrieve();
}
exports.fetchStatus = fetchStatus;
async function fetchUnresolvedIncidents() {
    return await CfxUnresolvedIncidents_module_1.default.get().retrieve();
}
exports.fetchUnresolvedIncidents = fetchUnresolvedIncidents;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const axios_1 = __importDefault(require("axios"));
class CfxUnresolvedIncidentsModule {
    static instance = null;
    static get() {
        if (this.instance === null)
            this.instance = new CfxUnresolvedIncidentsModule();
        return this.instance;
    }
    async retrieve() {
        const response = await axios_1.default.get(types_1.CFX_STATUS_UNRESOLVED, {
            headers: { "User-Agent": "cfx" },
        });
        if (response.status !== 200)
            throw new Error("Error while retrieving Cfx.re status");
        return response.data;
    }
}
exports.default = CfxUnresolvedIncidentsModule;

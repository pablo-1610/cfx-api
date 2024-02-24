"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const CfxUnresolvedIncidents_1 = __importDefault(require("../models/CfxUnresolvedIncidents"));
const axios_1 = __importDefault(require("axios"));
class CfxUnresolvedIncidentsModule {
    static instance = null;
    static get() {
        if (this.instance === null)
            this.instance = new CfxUnresolvedIncidentsModule();
        return this.instance;
    }
    async retrieve() {
        try {
            const response = await axios_1.default.get(types_1.CFX_STATUS_UNRESOLVED, {
                headers: { "User-Agent": "Mozilla" },
            });
            return new CfxUnresolvedIncidents_1.default(response.data);
        }
        catch (error) {
            throw new Error("Error while retrieving Cfx.re unresolved incidents");
        }
    }
}
exports.default = CfxUnresolvedIncidentsModule;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const CfxCitizenServer_1 = __importDefault(require("../models/CfxCitizenServer"));
const axios_1 = __importDefault(require("axios"));
class CfxCitizenServerModule {
    static instance = null;
    static get() {
        if (this.instance === null)
            this.instance = new CfxCitizenServerModule();
        return this.instance;
    }
    async retrieve(id) {
        console.log(`${types_1.CFX_MASTERLIST}${id}`);
        try {
            const response = await axios_1.default.get(types_1.CFX_MASTERLIST + id, {
                headers: { "User-Agent": "Mozilla" },
            });
            return new CfxCitizenServer_1.default(response.data);
        }
        catch (error) {
            throw new Error("Server not found or internal error occurred");
        }
    }
}
exports.default = CfxCitizenServerModule;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const CfxPinnedServers_1 = __importDefault(require("../models/CfxPinnedServers"));
const axios_1 = __importDefault(require("axios"));
class CfxPinnedServersModule {
    static instance = null;
    static get() {
        if (this.instance === null)
            this.instance = new CfxPinnedServersModule();
        return this.instance;
    }
    async retrieve() {
        try {
            const response = await axios_1.default.get(types_1.CFX_PINNED_SERVERS, {
                headers: { "User-Agent": "Mozilla" },
            });
            return new CfxPinnedServers_1.default(response.data);
        }
        catch (error) {
            throw new Error("Internal error occurred");
        }
    }
}
exports.default = CfxPinnedServersModule;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const axios_1 = __importDefault(require("axios"));
class CfxStatus {
    description;
    level;
    constructor(summary) {
        this.description = summary.status.description;
        this.level = summary.status.indicator;
    }
    get everythingOk() {
        return this.level === "none";
    }
    async fetchComponents() {
        const response = await axios_1.default.get(types_1.CFX_STATUS_COMPONENTS, {
            headers: { "User-Agent": "cfx" },
        });
        if (response.status !== 200)
            throw new Error("Cannot retrieve Cfx.re components status");
        return response.data.components;
    }
}
exports.default = CfxStatus;

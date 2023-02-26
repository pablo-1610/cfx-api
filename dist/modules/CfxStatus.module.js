"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typings_1 = require("../typings");
const CfxStatus_1 = __importDefault(require("../model/CfxStatus"));
const axios_1 = __importDefault(require("axios"));
class CfxStatusModule {
    static instance = null;
    static get() {
        if (this.instance === null)
            this.instance = new CfxStatusModule();
        return this.instance;
    }
    async retrieve() {
        const response = await axios_1.default.get(typings_1.CFX_STATUS_SUMMARY, typings_1.AxiosOptions);
        if (response.status !== 200)
            throw new Error("Error while retrieving Cfx.re status");
        return new CfxStatus_1.default(response.data);
    }
}
exports.default = CfxStatusModule;

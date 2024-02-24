"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CfxUnresolvedIncidents {
    page;
    incidents;
    constructor(payload) {
        this.page = payload.page;
        this.incidents = payload.incidents;
    }
}
exports.default = CfxUnresolvedIncidents;

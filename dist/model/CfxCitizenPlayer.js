"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CfxCitizenPlayer {
    endpoint;
    id;
    identifiers;
    name;
    ping;
    constructor(payload) {
        this.endpoint = payload.endpoint;
        this.id = payload.id;
        this.identifiers = payload.identifiers;
        this.name = payload.name;
        this.ping = payload.ping;
    }
}
exports.default = CfxCitizenPlayer;

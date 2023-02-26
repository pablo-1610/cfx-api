"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typings_1 = require("../typings");
class CitizenServer {
    id;
    data;
    constructor(data) {
        this.id = data.EndPoint;
        this.data = data.Data;
    }
    get playersCount() {
        return this.data.clients;
    }
    get players() {
        return this.data.players;
    }
    get gameType() {
        return this.data.gametype;
    }
    get hostname() {
        return this.data.hostname;
    }
    get mapName() {
        return this.data.mapname;
    }
    get maxPlayers() {
        return this.data.sv_maxclients;
    }
    get enhancedHostSupport() {
        return this.data.enhancedHostSupport;
    }
    get resources() {
        return this.data.resources;
    }
    get serverVersion() {
        return this.data.server;
    }
    get publicVariables() {
        return this.data.vars;
    }
    get playersCountFromServerReport() {
        return this.data.selfReportedClients;
    }
    get ownerId() {
        return this.data.ownerID;
    }
    get private() {
        return this.data.private;
    }
    get fallback() {
        return this.data.fallback;
    }
    get connectedEndpoints() {
        return this.data.connectEndPoints;
    }
    get upvotePower() {
        return this.data.upvotePower;
    }
    get burstPower() {
        return this.data.burstPower;
    }
    get supported() {
        return this.data.support_status;
    }
    get ownerName() {
        return this.data.ownerName;
    }
    get ownerProfileUrl() {
        return this.data.ownerProfile;
    }
    get ownerAvatarUrl() {
        return this.data.ownerAvatar;
    }
    get lastSeenDate() {
        return this.data.lastSeen;
    }
    get iconVersion() {
        return this.data.iconVersion;
    }
    get isOneSyncEnabled() {
        return this.publicVariables.onesync_enabled === "true";
    }
    get elementClub() {
        return this.publicVariables.element_club ?? typings_1.NONE;
    }
    get tags() {
        if (!this.publicVariables.tags) {
            return [];
        }
        return this.publicVariables.tags;
    }
    get projectName() {
        return this.publicVariables.sv_projectName ?? undefined;
    }
    get projectDesc() {
        return this.publicVariables.sv_projectDesc ?? undefined;
    }
    get isFull() {
        return this.playersCount >= this.maxPlayers;
    }
    hasResource(resource) {
        return this.resources.includes(resource);
    }
    hasAnyResourceStartingWith(resource) {
        return this.resources.some((r) => r.startsWith(resource));
    }
    hasTag(tag) {
        return this.tags.includes(tag);
    }
    isPlayerOnline(name) {
        return this.players.some((player) => player.name === name);
    }
}
exports.default = CitizenServer;

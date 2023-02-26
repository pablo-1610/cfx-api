"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CfxStatusComponent {
    id;
    name;
    status;
    createdAt;
    updatedAt;
    position;
    description;
    showcase;
    startDate;
    groupId;
    pageId;
    group;
    onlyShowIfDegraded;
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.status = data.status;
        this.createdAt = data.created_at;
        this.updatedAt = data.updated_at;
        this.position = data.position;
        this.description = data.description;
        this.showcase = data.showcase;
        this.startDate = data.start_date;
        this.groupId = data.group_id;
        this.pageId = data.page_id;
        this.group = data.group;
        this.onlyShowIfDegraded = data.only_show_if_degraded;
    }
}
exports.default = CfxStatusComponent;

import { CfxStatusComponentData } from "../types"

export default class CfxStatusComponent {
    id: string
    name: string
    status: string
    createdAt: string
    updatedAt: string
    position: number
    description: string
    showcase: boolean
    startDate: string
    groupId: string
    pageId: string
    group: string
    onlyShowIfDegraded: boolean

    constructor(data: CfxStatusComponentData) {
        this.id = data.id
        this.name = data.name
        this.status = data.status
        this.createdAt = data.created_at
        this.updatedAt = data.updated_at
        this.position = data.position
        this.description = data.description
        this.showcase = data.showcase
        this.startDate = data.start_date
        this.groupId = data.group_id
        this.pageId = data.page_id
        this.group = data.group
        this.onlyShowIfDegraded = data.only_show_if_degraded
    }
}

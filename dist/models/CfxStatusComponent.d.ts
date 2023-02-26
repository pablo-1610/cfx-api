import { CfxStatusComponentData } from "../types";
export default class CfxStatusComponent {
    id: string;
    name: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    position: number;
    description: string;
    showcase: boolean;
    startDate: string;
    groupId: string;
    pageId: string;
    group: string;
    onlyShowIfDegraded: boolean;
    constructor(data: CfxStatusComponentData);
}

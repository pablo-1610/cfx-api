export interface CfxFeaturedServerEntry {
    type: "single" | "collection"
    name: string
    hash_id?: string
    hash_ids?: string[]
}

export interface CfxFeaturedServersResponse {
    home_page_server: CfxFeaturedServerEntry
    servers: CfxFeaturedServerEntry[]
}

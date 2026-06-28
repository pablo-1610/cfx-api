import { servers, fetchFeaturedServers } from "../src"
import CfxFeaturedServers from "../src/models/CfxFeaturedServers"

describe("Featured servers", function () {
    jest.setTimeout(30000)

    test("servers.featured returns a CfxFeaturedServers", async function () {
        const featured = await servers.featured()
        expect(featured).toBeInstanceOf(CfxFeaturedServers)
        expect(Array.isArray(featured.entries)).toBe(true)
        expect(Array.isArray(featured.allIds)).toBe(true)
    })

    test("singles and collections partition the entries", async function () {
        const featured = await servers.featured()
        expect(
            featured.singles.length + featured.collections.length
        ).toBe(featured.entries.length)
    })

    test("fetchFeaturedServers alias works", async function () {
        const featured = await fetchFeaturedServers()
        expect(featured).toBeInstanceOf(CfxFeaturedServers)
    })
})

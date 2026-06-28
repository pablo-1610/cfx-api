import { servers, fetchServer } from "../src"
import CitizenServer from "../src/models/CfxCitizenServer"

describe("Single server", function () {
    jest.setTimeout(60000)

    let discoveredId: string

    beforeAll(async function () {
        const list = await servers.all({ minPlayers: 1, limit: 1 })
        discoveredId = list[0].id
    })

    test("Empty server id rejects", async function () {
        await expect(servers.single("")).rejects.toThrow()
    })

    test("Invalid server id rejects", async function () {
        await expect(servers.single("this-id-does-not-exist")).rejects.toThrow()
    })

    test("A discovered server id resolves to a CitizenServer", async function () {
        const server = await servers.single(discoveredId)
        expect(server).toBeInstanceOf(CitizenServer)
        expect(server!.id).toBe(discoveredId)
        expect(typeof server!.hostname).toBe("string")
        expect(Array.isArray(server!.players)).toBe(true)
    })

    test("fetchServer alias resolves to a CitizenServer", async function () {
        const server = await fetchServer(discoveredId)
        expect(server).toBeInstanceOf(CitizenServer)
    })

    test("Enriched helpers are consistent", async function () {
        const server = await servers.single(discoveredId)
        expect(server!.joinUrl).toBe(`https://cfx.re/join/${discoveredId}`)
        expect(typeof server!.isFiveM).toBe("boolean")
        expect(Array.isArray(server!.tags)).toBe(true)
    })
})

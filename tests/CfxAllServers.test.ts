import { servers, fetchAllServers } from "../src"
import CitizenServer from "../src/models/CfxCitizenServer"

describe("All servers stream", function () {
    jest.setTimeout(60000)

    test("servers.all returns a decoded list of CitizenServer", async function () {
        const list = await servers.all({ limit: 5 })
        expect(Array.isArray(list)).toBe(true)
        expect(list.length).toBeGreaterThan(0)
        expect(list[0]).toBeInstanceOf(CitizenServer)
        expect(typeof list[0].hostname).toBe("string")
        expect(typeof list[0].maxPlayers).toBe("number")
    })

    test("minPlayers filter is respected", async function () {
        const list = await servers.all({ minPlayers: 1, limit: 20 })
        for (const server of list) {
            expect(server.playersCount).toBeGreaterThanOrEqual(1)
        }
    })

    test("limit filter caps the result count", async function () {
        const list = await servers.all({ limit: 3 })
        expect(list.length).toBeLessThanOrEqual(3)
    })

    test("fetchAllServers alias works", async function () {
        const list = await fetchAllServers({ limit: 1 })
        expect(list.length).toBeLessThanOrEqual(1)
    })
})

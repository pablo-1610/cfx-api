import { servers } from "../src"

describe("Server icon", function () {
    jest.setTimeout(60000)

    test("servers.icon returns a PNG buffer for a discovered server", async function () {
        const list = await servers.all({ minPlayers: 1, limit: 25 })
        const target = list.find((server) => server.iconVersion !== undefined)
        expect(target).toBeDefined()

        const icon = await servers.icon(target!.id, target!.iconVersion)
        expect(Buffer.isBuffer(icon)).toBe(true)
        expect(icon.length).toBeGreaterThan(0)
        expect(icon.subarray(1, 4).toString("ascii")).toBe("PNG")
    })

    test("iconUrl builds the expected url", function () {
        const url = servers.iconUrl("example", 1)
        expect(url).toBe(
            "https://frontend.cfx-services.net/api/servers/icon/example/1.png"
        )
    })
})

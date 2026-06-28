import { status, fetchStatus } from "../src"
import CfxStatus from "../src/models/CfxStatus"
import CfxStatusComponent from "../src/models/CfxStatusComponent"

describe("Cfx.re status", function () {
    jest.setTimeout(30000)

    test("status.get returns a CfxStatus with a level", async function () {
        const result = await status.get()
        expect(result).toBeInstanceOf(CfxStatus)
        expect(typeof result!.level).toBe("string")
        expect(typeof result!.description).toBe("string")
        expect(typeof result!.everythingOk).toBe("boolean")
    })

    test("fetchComponents returns status components", async function () {
        const result = await status.get()
        const components = await result!.fetchComponents()
        expect(Array.isArray(components)).toBe(true)
        expect(components.length).toBeGreaterThan(0)
        expect(components[0]).toBeInstanceOf(CfxStatusComponent)
        expect(typeof components[0].name).toBe("string")
    })

    test("fetchStatus alias works", async function () {
        const result = await fetchStatus()
        expect(result).toBeInstanceOf(CfxStatus)
    })
})

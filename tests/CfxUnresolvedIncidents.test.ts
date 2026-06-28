import { status, fetchUnresolvedIncidents } from "../src"
import CfxUnresolvedIncidents from "../src/models/CfxUnresolvedIncidents"

describe("Cfx.re unresolved incidents", function () {
    jest.setTimeout(30000)

    test("status.unresolvedIncidents returns a CfxUnresolvedIncidents", async function () {
        const result = await status.unresolvedIncidents()
        expect(result).toBeInstanceOf(CfxUnresolvedIncidents)
        expect(Array.isArray(result!.incidents)).toBe(true)
        expect(result!.page).toBeDefined()
    })

    test("fetchUnresolvedIncidents alias works", async function () {
        const result = await fetchUnresolvedIncidents()
        expect(result).toBeInstanceOf(CfxUnresolvedIncidents)
    })
})

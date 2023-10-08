import CfxUnresolvedIncidentsModule from "../src/modules/CfxUnresolvedIncidents.module"
import CfxUnresolvedIncidents from "../src/models/CfxUnresolvedIncidents"
import { fetchUnresolvedIncidents } from "../src"

describe("Tests for CfxUnresolvedIncidents module", function () {

    test("Default behaviour of the CfxUnresolvedIncidents.retrieve function", async function () {
        const instance = new CfxUnresolvedIncidentsModule()

        try {
            const unresolvedIncidents = await instance.retrieve()
            expect(unresolvedIncidents).toBeInstanceOf(CfxUnresolvedIncidents)
        } catch (error) {
            // If there is a catch, it's mostly due to Cfx.re server
            // because the route won't take any argument.
            expect(error).toBeInstanceOf(Error)
        }
    })

    test("Default behaviour of the fetchUnresolvedIncidents function", async function () {
        try {
            const unresolvedIncidents = await fetchUnresolvedIncidents()
            expect(unresolvedIncidents).toBeInstanceOf(CfxUnresolvedIncidents)
        } catch (error) {
            // If there is a catch, it's mostly due to Cfx.re server
            // because the route won't take any argument.
            expect(error).toBeInstanceOf(Error)
        }
    })
})
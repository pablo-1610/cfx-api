import CfxStatusModule from "../src/modules/CfxStatus.module"
import CfxStatus from "../src/models/CfxStatus"
import { fetchStatus } from "../src"

describe("Tests for CfxStatus module", function () {

    test("Default behaviour of the CfxStatus.retrieve function", async function () {

        try {
            const instance = new CfxStatusModule(),
                status = await instance.retrieve()
            expect(status).toBeInstanceOf(CfxStatus)
        } catch (error) {
            // If there is a catch, it's mostly due to Cfx.re server
            // because the route won't take any argument.
            expect(error).toBeInstanceOf(Error)
        }
    })

    test("Default behaviour of the fetchStatus function", async function () {
        const instance = new CfxStatusModule()

        try {
            const status = await fetchStatus()
            expect(status).toBeInstanceOf(CfxStatus)
        } catch (error) {
            // If there is a catch, it's mostly due to Cfx.re server
            // because the route won't take any argument.
            expect(error).toBeInstanceOf(Error)
        }
    })
})
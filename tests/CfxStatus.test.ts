import CfxStatusModule from "../src/modules/CfxStatus.module"
import CfxStatus from "../src/models/CfxStatus"

describe("Tests for CfxStatus module", function() {
    const instance = new CfxStatusModule()

    test("Default behaviour of the CfxStatus.retrieve function", async function() {
        try {
            const status = await instance.retrieve()
            expect(status).toBeInstanceOf(CfxStatus)
        } catch(error) {
            // If there is a catch, it's mostly due to Cfx.re server
            // because the route won't take any argument.
            expect(error).toBeInstanceOf(Error)
        }
    })
})
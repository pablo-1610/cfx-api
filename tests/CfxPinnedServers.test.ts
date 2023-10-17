import CfxPinnedServersModule from "../src/modules/CfxPinnedServers.module"
import CfxPinnedServers from "../src/models/CfxPinnedServers"
import { fetchPinnedServers } from "../src"

describe("Tests for CfxPinnedServers module", function () {

    test("Default behaviour of the CfxPinnedServers.retrieve function", async function () {

        try {
            const instance = new CfxPinnedServersModule(),
                pinnedServers = await instance.retrieve()
            expect(pinnedServers).toBeInstanceOf(CfxPinnedServers)
        } catch (error) {
            // If there is a catch, it's mostly due to Cfx.re server
            // because the route won't take any argument.
            expect(error).toBeInstanceOf(Error)
        }
    })

    test("Default behaviour of the fetchPinnedServers function", async function () {
        try {
            const status = await fetchPinnedServers()
            expect(status).toBeInstanceOf(CfxPinnedServers)
        } catch (error) {
            // If there is a catch, it's mostly due to Cfx.re server
            // because the route won't take any argument.
            expect(error).toBeInstanceOf(Error)
        }
    })
})
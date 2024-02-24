import CfxCitizenServerModule from "../src/modules/CfxCitizenServer.module"
import CitizenServer from "../src/models/CfxCitizenServer"
import { fetchServer } from "../src"

describe("Tests for CfxCitizenServer module", function() {
    const instance = new CfxCitizenServerModule()
    
    test("Empty server ID must throw an error", async function() {
        try {
            await instance.retrieve("")
        } catch(error) {
            expect(error).toBeInstanceOf(Error)
        }
    })
    
    test("Invalid server ID must throw an error", async function() {
        try {
            await instance.retrieve("InvalidServerID")
        } catch(error) {
            expect(error).toBeInstanceOf(Error)
        }
    })
    
    test("Valid server ID must return a CitizenServer object", async function() {
        try {
            const server = await instance.retrieve("qkj43z")
            expect(server).toBeInstanceOf(CitizenServer)
        } catch(error) {
            expect(error).toBeInstanceOf(Error)
        }
    })

    test("Empty server ID must throw an error", async function() {
        try {
            await fetchServer("")
        } catch(error) {
            expect(error).toBeInstanceOf(Error)
        }
    })
    
    test("Invalid server ID must throw an error", async function() {
        try {
            await fetchServer("InvalidServerID")
        } catch(error) {
            expect(error).toBeInstanceOf(Error)
        }
    })
    
    test("Valid server ID must return a CitizenServer object", async function() {
        try {
            const server = await fetchServer("qkj43z")
            expect(server).toBeInstanceOf(CitizenServer)
        } catch(error) {
            expect(error).toBeInstanceOf(Error)
        }
    })
})
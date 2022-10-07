import { multi } from ".";
import request from "supertest";
import {app} from "./server";


describe("First test", () => {
    it("Should return correct result", () => {
        expect(multi(7,3)).toBe(21);
        expect(multi(7,5)).toBe(35);
        expect(multi(0,0)).toBe(0);
    })

    it("Should return number", () => {
        expect( typeof ( multi(7, 3) ) ).toBe("number")
    })
})

describe("Test server", () => {

    it("returned 200", async () => {
        await request(app)
            .get("/")
            .expect(200)
    })

})
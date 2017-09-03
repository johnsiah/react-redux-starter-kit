import * as actions from "./index"

describe("example actions", () => {
    it("example should update text", () => {
        expect(actions.example("Test")).toEqual({
            type: actions.EXAMPLE,
            text: "Test"
        })
    })
})

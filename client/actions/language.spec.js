import * as actions from "./language"

describe("switch language actions", () => {
    it("should update locale", () => {
        expect(actions.switchLanguage("EN")).toEqual({
            type  : actions.SWITCH_LANGUAGE,
            locale: "en"
        })

        expect(actions.switchLanguage("En")).toEqual({
            type  : actions.SWITCH_LANGUAGE,
            locale: "en"
        })

        expect(actions.switchLanguage("en")).toEqual({
            type  : actions.SWITCH_LANGUAGE,
            locale: "en"
        })

        expect(actions.switchLanguage("eN")).toEqual({
            type  : actions.SWITCH_LANGUAGE,
            locale: "en"
        })
    })
})

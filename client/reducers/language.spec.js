import language from "./language"
import * as actions from "../actions/language"

describe("language reducer", () => {
    it("should handle initial state", () => {
        expect(
            language(undefined, {})
        ).toEqual({
            locale: "en"
        })
    })

    it("should handle switch language", () => {
        expect(
            language({}, {
                type  : actions.SWITCH_LANGUAGE,
                locale: "en"
            })
        ).toEqual({
            locale: "en"
        })

        expect(
            language({
                locale: "en"
            }, {
                type  : actions.SWITCH_LANGUAGE,
                locale: "zh"
            })
        ).toEqual({
            locale: "zh"
        })
    })
})

import { flattenMessages } from "./i18n"

describe("i18n functions", () => {
    it("should flatten JSON into single level depth", () => {
        expect(
            flattenMessages({
                parent: {
                    child: "test"
                }
            })
        ).toEqual({
            "parent.child": "test"
        })

        expect(
            flattenMessages({
                parent: {
                    child : "test",
                    child2: {
                        nestedChild: "nestedTest"
                    }
                },

                parent2: {
                    child: "test2"
                }
            })
        ).toEqual({
            "parent.child"             : "test",
            "parent.child2.nestedChild": "nestedTest",
            "parent2.child"            : "test2"
        })
    })
})

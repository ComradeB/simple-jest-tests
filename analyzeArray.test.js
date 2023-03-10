// const analyzeArray = require("./analyzeArray");
import analyzeArray from "./analyzeArray.js"

test("Returns object with accurate property values", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    })
})
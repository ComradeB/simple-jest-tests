const caesarCipher = require("./caesarCipher");

test('Shifts string by given shift factor', () => {
    expect(caesarCipher('ZZZ wtf!!!???', 1)).toBe('AAA xug!!!???')
})
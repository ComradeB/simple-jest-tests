const capitalize = require("./capitalize")

test('capitalizes a string', () => {
    expect(capitalize('hello')).toBe('HELLO')
})
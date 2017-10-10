const fetchData = require('../async')
test("test fetch data function", () => {
    expect.assertions(1)
    return fetchData().then(data => {
        expect(data['id']).toBe(1)
    })
})
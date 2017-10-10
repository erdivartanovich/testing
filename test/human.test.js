const Human = require('../human')

test('testing human constructor', () => {
    const human1 = new Human('erdi', 'varta')
    expect(human1.completeName()).toBe("erdi varta");
})

test('test if firstName is empty', () => {
    const human1 = new Human('', 'varta')
    expect(human1.completeName()).toBe(human1.lastName)
})

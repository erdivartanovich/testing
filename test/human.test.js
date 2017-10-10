const Human = require('../human')

test('testing human constructor', () => {
    const human1 = new Human('erdi', 'varta')
    expect(human1.completeName()).toBe("erdi varta");
})

test('testing human constructor if names empty', () => {
    const human1 = new Human('', '')
    expect(human1.completeName()).toBe("unknown");
})

test('testing human constructor if first name empty', () => {
    const human1 = new Human('', 'joy')
    expect(human1.completeName()).toBe(human1.firstName + " " + human1.firstName);
})

test('testing human constructor if last name empty', () => {
    const human1 = new Human('grey', '')
    expect(human1.completeName()).toBe(human1.firstName + " " + human1.firstName);
})
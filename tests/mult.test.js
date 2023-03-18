const mult = require('../src/mult')

it('should return correct mult', ()=> {
    const reuslt = mult(2, 5)
    expect(reuslt).toBe(10)
})
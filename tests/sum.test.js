const sum = require('../src/sum')

it('should return correct sum', ()=> {
    const reuslt = sum(2, 5)
    expect(reuslt).toBe(7)
})
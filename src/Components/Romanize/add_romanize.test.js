const add_romanizeTest = require ('./add_romanize')
describe("Testing the conversion and addition",()=>{

    it('testing basic addition of numbers and roman output',()=>{
        expect(add_romanizeTest(3,2)).toEqual("V")
    })
    it('Checking the output value as to be string',()=>{
        expect(add_romanizeTest()).toBe("")
    })
   })
const deromanizeTest = require ("./deromanize")
describe('input deromaniz testing',()=> {
    it("Testing a roman number to numeral conversion ",()=>{
       expect(deromanizeTest('C')).toEqual(100)
    })

    it('testing a valid input in Uppercase', () => {
        expect(deromanizeTest('IX')).toEqual(9)
    })

    it('testing an invalid input', () => {
        expect(deromanizeTest('po')).toEqual(-1)
    })

    it('testing an input in lower case',()=>{
        expect(deromanizeTest('iii')).toEqual(3)
    })





})
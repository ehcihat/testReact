import isapple from '../helper/isapple'

describe('isapple', () => {
    it('debe devolver un resultado de tipo boolean', () => {
        const result = isapple('manzana')
        expect(typeof result).toBe('boolean')
    })

    it('debe devolver true si la entrada es "manzana"', () => {
        const result = isapple('manzana')
        expect(result).toBe(true)
    })

    it('debe devolver false si la entrada no es "manzana"', () => {
        const result1 = isapple('almendra')
        const result2 = isapple('manzanas')
        const result3 = isapple('')

        expect(result1).toBe(false)
        expect(result2).toBe(false)
        expect(result3).toBe(false)
    })
});
import divide from '../helper/divide'

describe('divide', () => {
    it('debe retornar un número si los argumentos son números válidos', () => {
        const result = divide(10, 2)
        expect(typeof result).toBe('number')
    })

    it('debe retornar null si uno de los argumentos es una string', () => {
        const result1 = divide('hola', 2)
        const result2 = divide(10, 'mundo')
        expect(result1).toBe(null)
        expect(result2).toBe(null)
    })

    it('debe realizar la división de 10 y 2', () => {
        const result = divide(10, 2)
        expect(result).toBe(5)
    })

    it('debe realizar la división de 10 y 4', () => {
        const result = divide(10, 4)
        expect(result).toBe(2.5)
    })

    it('debe retornar null si el divisor es 0', () => {
        const result = divide(10, 0)
        expect(result).toBe(null)
    })
});
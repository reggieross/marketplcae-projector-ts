import {validateBrand, validatePrice, validateProduct} from './ProductValidator'

describe('Product Validator', () => {
    it('Should throw and error if no name is specified in a product', () => {
        const validation = () => {
            validateProduct({ name: null })
        }
        expect(validation).toThrow(Error)
    })

    it('Should return undefined if no amount is specified in a price', () => {
        expect(validatePrice({ amount: null } as any)).toEqual(undefined)
    });

    it('Should return undefined if no name is specified in a brand', () => {
        expect(validateBrand({ name: null } as any)).toEqual(undefined)
    });
})

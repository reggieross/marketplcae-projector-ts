import { IProductEntity } from '../types/entityDataTypes'
import { ProductRepository } from './ProductRepository'
import { getDB } from './db'
import { Product } from '../types/clientDataTypes'

describe('Product Repo', () => {
    it('Should insert new product into db', async () => {
        const product: Product = {
            name: 'create-product-test',
        }
        const id = await ProductRepository.createProduct(product)
        expect(id).toEqual(1)
    })
})

import { IProductEntity } from '../types/entityDataTypes'
import { ProductRepository } from './ProductRepository'
import { getDB } from './db'
import { Product } from '../types/clientDataTypes'
import { BrandRepository } from './BrandRepository'
import { fromString } from 'uuidv4'

describe('Brand Repo', () => {
    it('Should insert new brand into db', async () => {
        const id = await BrandRepository.createBrand({ name: 'new-brand' })
        expect(id).toEqual(fromString('new-brand'))
    })

    it('Should return id of product if it already exists', async () => {
        const id1 = await BrandRepository.createBrand({ name: 'new-brand' })
        const id2 = await BrandRepository.createBrand({ name: 'new-brand' })
        expect(id1).toEqual(fromString(id2))
    })
})

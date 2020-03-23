import { IProductEntity } from '../types/entityDataTypes'
import { ProductRepository } from './ProductRepository'
import { getDB } from './db'
import { BrandRepository } from './BrandRepository'
import { fromString } from 'uuidv4'
import { PriceRepository } from './PriceRepository'
import { Site } from '../enum/Site'

describe('Price Repo', () => {
    it('Should insert new price into db', async () => {
        await PriceRepository.createPrice(
            { amount: '100', currency: 'USD', site: Site.HAVEN },
            'some-id'
        )

        const query = "select * from price where product_id = 'some-id'"
        const res = await getDB().any(query)
        expect(res.length).toEqual(1)
    })
})

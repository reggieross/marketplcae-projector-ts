import { Price, Product } from '../types/clientDataTypes'
import { IProductEntity, PriceEntity } from '../types/entityDataTypes'
import { fromString, uuid } from 'uuidv4'
import { Currency } from '../enum/Currency'
import { Site } from '../enum/Site'

export class PriceEntityDecorator {
    readonly priceEntity: PriceEntity

    constructor(price: Price, product_id: string) {
        this.priceEntity = {
            currency: this.getCurrencyForEntityFromProduct(price),
            amount: price.amount,
            site: Site[price.site],
            id: uuid(),
            product_id,
        }
    }

    private getCurrencyForEntityFromProduct = (price: Price) => {
        return Currency[price.currency] || Currency.USD
    }

    getPriceEntity = () => this.priceEntity
}

import { Product } from '../types/clientDataTypes'
import { IProductEntity } from '../types/entityDataTypes'

export class ProductEntityDecorator {
    readonly productEntity

    constructor(product: Product, brandId?: string) {
        this.productEntity = {
            name: product.name,
            description: null,
            brand_id: brandId,
        }
    }

    getProductEntity = () => this.productEntity;
}

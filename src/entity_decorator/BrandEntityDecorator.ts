import { Brand } from '../types/clientDataTypes'
import { fromString } from 'uuidv4'

export class BrandEntityDecorator {
    readonly brandEntity

    constructor(brand: Brand) {
        this.brandEntity = {
            name: brand.name,
            id: fromString(brand.name),
        }
    }

    getBrandEntity = () => this.brandEntity
}

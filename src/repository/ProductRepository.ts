import { Product } from '../types/clientDataTypes'
import { getDB } from './db'
import { ProductEntityDecorator } from '../entity_decorator/ProductEntityDecorator'

const createProduct = async (
    product: Product,
    brandId?: string
): Promise<string | null> => {
    const db = getDB()
    const productEntity = new ProductEntityDecorator(
        product,
        brandId
    ).getProductEntity()
    const query =
        'insert into product (${this:name}) values (${this:csv}) returning id;'
    const res: Array<{ id: string }> = await db.any(query, productEntity)
    return res[0].id
}

export const ProductRepository = {
    createProduct,
}

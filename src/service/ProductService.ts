import { Message } from 'aws-sdk/clients/sqs'
import { Brand, Price, Product, ProductRequest } from '../types/clientDataTypes'
import { BrandRepository } from '../repository/BrandRepository'
import { ProductRepository } from '../repository/ProductRepository'
import { PriceRepository } from '../repository/PriceRepository'
import { getLogger } from '../factory/LoggerFactory'
import {
    validateBrand,
    validatePrice,
    validateProduct,
} from './ProductValidator'

const log = getLogger()

const processProductMessage = async (message: Message) => {
    const { product, price, brand } = parseAndValidateProductMessage(message)
    let brandId
    if (brand) {
        brandId = await BrandRepository.createBrand(brand)
    }

    const productId = await ProductRepository.createProduct(product, brandId)
    if (productId && price) {
        await PriceRepository.createPrice(price, productId)
    }

    console.log(`successfully processed ${product.name}: ${productId}`)
}

const parseAndValidateProductMessage = (
    message: Message
): { product: Product; brand?: Brand; price?: Price } => {
    const request: ProductRequest = JSON.parse(message.Body)
    const product = validateProduct(request.product)
    const brand = validateBrand({ name: product.brand })
    const price = validatePrice(request.product.price)
    return { product, price, brand }
}

export const ProductService = {
    processProductMessage,
}

export interface Price {
    currency: string
    amount: string
    site?: string
}

export interface Product {
    name: string
    brand?: string
    uri?: string
    imageURI?: string
    price?: Price
}

export interface Brand {
    name: string
}

export interface ProductRequest {
    product: Product
}


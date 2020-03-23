export interface IProductEntity {
    id?: string
    brand_id?: string
    description?: string
    name: string
}

export interface BrandEntity {
    id: string
    name: string
}

export interface PriceEntity {
    id: string
    amount: string
    currency: string
    site: string
    product_id: string;
}

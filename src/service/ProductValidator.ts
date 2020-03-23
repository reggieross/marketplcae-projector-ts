import {Brand, Price, Product} from "../types/clientDataTypes";

export const validateProduct = (product: Product) => {
    if (product.name) {
        return product;
    }
    throw new Error("No name specified in product");
}

export const validatePrice = (price: Price) => {
    if (price.amount) {
        return price
    }
    return undefined;
}

export const validateBrand = (brand: Brand): Brand | undefined => {
    if (brand.name) {
        return brand
    }
    return undefined
};
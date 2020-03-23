import {getDB} from "./db";
import {BrandEntityDecorator} from "../entity_decorator/BrandEntityDecorator";
import {Price} from "../types/clientDataTypes";
import {PriceEntityDecorator} from "../entity_decorator/PriceEntityDecorator";

const createPrice = async (price: Price, productId: string): Promise<string> => {
    const db = getDB()
    const priceEntity = new PriceEntityDecorator(price, productId).getPriceEntity()
    const query =
        'insert into price (${this:name}) values (${this:csv}) returning id;'
    const res: Array<{ id: string }> = await db.any(query, priceEntity)
    return res[0].id
}

export const PriceRepository = {
    createPrice,
}

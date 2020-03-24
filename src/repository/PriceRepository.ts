import {getDB} from "./db";
import {BrandEntityBuilder} from "../entity_builder/BrandEntityBuilder";
import {Price} from "../types/clientDataTypes";
import {PriceEntityBuilder} from "../entity_builder/PriceEntityBuilder";

const createPrice = async (price: Price, productId: string): Promise<string> => {
    const db = getDB()
    const priceEntity = new PriceEntityBuilder(price, productId).getPriceEntity()
    const query =
        'insert into price (${this:name}) values (${this:csv}) returning id;'
    const res: Array<{ id: string }> = await db.any(query, priceEntity)
    return res[0].id
}

export const PriceRepository = {
    createPrice,
}

import { getDB } from './db'
import { BrandEntityBuilder } from '../entity_builder/BrandEntityBuilder'
import { Brand } from '../types/clientDataTypes'

const createBrand = async (brand: Brand): Promise<string> => {
    const db = getDB()
    const brandEntity = new BrandEntityBuilder(brand).getBrandEntity()
    const query = `
    WITH insertQuery AS (
        insert into brand ($(brandEntity:name)) values ($(brandEntity:csv))
        ON CONFLICT (name) DO NOTHING
        RETURNING name, id
    )
    SELECT id AS result from insertQuery
    WHERE EXISTS (SELECT 1 FROM insertQuery)
    UNION ALL
    SELECT id 
        FROM brand
        WHERE name = $(brandEntity.name)
        AND NOT EXISTS (SELECT 1 FROM insertQuery);
    `

    const res: Array<{ id: string }> = await db.any(query, { brandEntity })
    return res[0].id
}

export const BrandRepository = {
    createBrand,
}

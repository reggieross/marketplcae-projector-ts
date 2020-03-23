import {Product} from "./clientDataTypes";
import {IProductEntity} from "./entityDataTypes";

interface Dao<T> {
    save: (entity: T) => Promise<string>
}

export interface IProductDao extends Dao<Product> {
    findFirstByName: (productName: string) => Promise<IProductEntity | undefined>
}
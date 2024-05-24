import {StoreFactory} from "./store-factory";
import {IProduct} from "../products/product.interface";
import {Electronic} from "../products/electronic";

export class ElectronicsFactory extends StoreFactory{

    name: string;
    price: number;
    stock: number;
    brand: string;

    constructor(name : string, price: number, stock: number, brand: string) {
        super();
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.brand = brand;
    }

    createProduct(): IProduct {
        return new Electronic(this.name,this.price,this.stock,this.brand);
    }

}

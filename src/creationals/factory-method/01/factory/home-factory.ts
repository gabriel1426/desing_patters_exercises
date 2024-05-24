import {StoreFactory} from "./store-factory";
import {IProduct} from "../products/product.interface";
import {Home} from "../products/home";

export class HomeFactory extends StoreFactory{

    name: string;
    price: number;
    stock: number;
    type: string;

    constructor(name : string, price: number, stock: number, type: string) {
        super();
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.type = type;
    }

    createProduct(): IProduct {
        return new Home(this.name,this.price,this.stock,this.type);
    }

}

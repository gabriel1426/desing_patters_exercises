import {IProduct} from "./product.interface";

export class Home implements IProduct{
    name: string;
    price: number;
    stock: number;
    type: string

    constructor(name : string, price: number, stock: number, type: string) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.type = type;
    }

    getName() {
        console.log(`Soy un ${this.name}`);
    }
}

import {IProduct} from "./product.interface";

export class Electronic implements IProduct{
    name: string;
    price: number;
    stock: number;
    brand: string;

    constructor(name : string, price: number, stock: number, brand: string) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.brand = brand;
    }

    getName() {
        console.log(`Soy una ${this.name}`);
    }
}

import {IProduct} from "./product.interface";

export class Book implements IProduct{
    name: string;
    price: number;
    stock: number;
    autor: string;
    numPages: number;

    constructor(name : string, price: number, stock: number, autor: string, numPage: number) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.autor = autor;
        this.numPages = numPage;
    }

    getName() {
        console.log(`Me llamo ${this.name}`);
    }
}

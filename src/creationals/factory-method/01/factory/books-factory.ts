import {StoreFactory} from "./store-factory";
import {Book} from "../products/book";
import {IProduct} from "../products/product.interface";

export class BooksFactory extends StoreFactory {

    name: string;
    price: number;
    stock: number;
    autor: string;
    numPages: number;

    constructor(name : string, price: number, stock: number, autor: string, numPage: number) {
        super();
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.autor = autor;
        this.numPages = numPage;

    }
    createProduct(): IProduct {
        return new Book(this.name,this.price,this.stock,this.autor,this.numPages);
    }

}

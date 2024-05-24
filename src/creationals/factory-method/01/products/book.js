"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(name, price, stock, autor, numPage) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.autor = autor;
        this.numPages = numPage;
    }
    Book.prototype.getName = function () {
        console.log("Me llamo ".concat(this.name));
    };
    return Book;
}());
exports.Book = Book;

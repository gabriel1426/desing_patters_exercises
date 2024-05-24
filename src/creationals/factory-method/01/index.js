"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("./store");
var books_factory_1 = require("./factory/books-factory");
var electronics_factory_1 = require("./factory/electronics-factory");
var home_factory_1 = require("./factory/home-factory");
var store = new store_1.Store();
// dependiendo de x condiciones se puede crear el producto
store.createNewProduct(new books_factory_1.BooksFactory("Patrones de Diseño", 89, 30, "Carlos", 200));
console.log("____________________");
store.createNewProduct(new electronics_factory_1.ElectronicsFactory("Nevera", 100, 20, "Mabe"));
console.log("____________________");
store.createNewProduct(new home_factory_1.HomeFactory("Comedor", 80, 5, "Interior"));

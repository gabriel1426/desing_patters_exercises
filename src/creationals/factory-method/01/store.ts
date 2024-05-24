import {StoreFactory} from "./factory/store-factory";
import {BooksFactory} from "./factory/books-factory";
import {ElectronicsFactory} from "./factory/electronics-factory";
import {HomeFactory} from "./factory/home-factory";

export class Store {

    public createNewProduct(type: string){

        // dependiendo de x condiciones se puede crear el producto

        let product: StoreFactory;

        switch (type) {
            case 'book':
                product = new BooksFactory("Patrones de Diseño", 89, 30, "Carlos", 200);
            case 'Electronic':
                product = new ElectronicsFactory("Nevera", 100, 20, "Mabe");
            case 'Home':
                product = new HomeFactory("Comedor", 80, 5, "Interior");
        }

        product.showName();
    }

}

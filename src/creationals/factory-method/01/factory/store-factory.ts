import {IProduct} from "../products/product.interface";

export abstract class StoreFactory {

    public abstract createProduct(): IProduct;

    showName() {
        const producto = this.createProduct();
        producto.getName();
    }

}

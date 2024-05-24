import { InternalOrderModel } from "./internal-order.model";

export class InternalOrderService {

    private internalOrderModel!: InternalOrderModel;

    constructor(description: string, quantity: number) {
        this.createOrder(description, quantity);
    }

    public createOrder(description: string, quantity: number): void {
        this.internalOrderModel = new InternalOrderModel(description, quantity);
    }

    public obtenerID(): string {
        return this.internalOrderModel.id;
    }

    public obtenerCantidad(): number {
        return this.internalOrderModel.quantity;
    }


    public obtenerDescription(): string {
        return this.internalOrderModel.description
    }
}

import { InternalOrderService } from "../pedidos/internal/internal-order.service";
import { IOrder } from "./order.interface";

export class AdapterInternalClass implements IOrder {

    private internalOrderService: InternalOrderService;

    constructor(description: string, quantity: number) {
        this.internalOrderService = new InternalOrderService(description, quantity);
    }

    public getID(): string {
        return this.internalOrderService.obtenerID();
    }

    public getQuantity(): number {
        return this.internalOrderService.obtenerCantidad();
    }

    public getDescription(): string {
        return this.internalOrderService.obtenerDescription();
    }
}

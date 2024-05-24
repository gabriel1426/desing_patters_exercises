import { IOrder } from "./order.interface";
import { ExternalOrderService } from "../pedidos/external/external-order.service";

export class AdapterExternalClass implements IOrder {

    private externalOrderService: ExternalOrderService;

    constructor(description: string, quantity: number) {
        this.externalOrderService = new ExternalOrderService(description, quantity);
    }

    public getID(): string {
        return this.externalOrderService.getOrderIdentifier();
    }

    public getQuantity(): number {
        return this.externalOrderService.getItemsCount();
    }

    public getDescription(): string {
        return this.externalOrderService.getOrderDetails();
    }
}

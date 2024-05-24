import {ExternalOrderModel} from "./external-order.model";

export class ExternalOrderService {

    private externalOrderModel: ExternalOrderModel;

    constructor(description: string, quantity: number) {
        this.externalOrderModel = new ExternalOrderModel(description, quantity);
    }

    public getOrderIdentifier(): string {
        return this.externalOrderModel.id;
    }

    public getItemsCount(): number {
        return this.externalOrderModel.quantity;
    }

    public getOrderDetails(): string {
        return this.externalOrderModel.description;
    }
}

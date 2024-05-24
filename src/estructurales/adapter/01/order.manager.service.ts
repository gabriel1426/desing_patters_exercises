import { IOrder } from "./adapter/order.interface";

export class OrderManagerService {

    public procesarPedidos(orders: IOrder[]): void {
        orders.forEach((order: IOrder) => {
            console.log('-----------------------------------');
            console.log('Procesando pedido...');
            console.log('ID: ', order.getID());
            console.log('Cantidad: ', order.getQuantity());
            console.log('Descripción: ', order.getDescription());
        });
    }
}

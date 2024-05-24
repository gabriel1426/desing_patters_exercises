import {IOrder} from "./adapter/order.interface";
import {AdapterInternalClass} from "./adapter/adapter-internal.class";
import {AdapterExternalClass} from "./adapter/adapter-external.class";
import {OrderManagerService} from "./order.manager.service";

const orders: IOrder[] = []

orders.push(new AdapterInternalClass('Compra realizada en el sistema interno', 8));
orders.push(new AdapterExternalClass('Compra realizada en el sistema externo', 2));

const manager = new OrderManagerService();

manager.procesarPedidos(orders);

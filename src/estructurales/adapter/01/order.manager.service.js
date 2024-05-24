"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderManagerService = void 0;
var OrderManagerService = /** @class */ (function () {
    function OrderManagerService() {
    }
    OrderManagerService.prototype.procesarPedidos = function (orders) {
        orders.forEach(function (order) {
            console.log('-----------------------------------');
            console.log('Procesando pedido...');
            console.log('ID: ', order.getID());
            console.log('Cantidad: ', order.getQuantity());
            console.log('Descripción: ', order.getDescription());
        });
    };
    return OrderManagerService;
}());
exports.OrderManagerService = OrderManagerService;

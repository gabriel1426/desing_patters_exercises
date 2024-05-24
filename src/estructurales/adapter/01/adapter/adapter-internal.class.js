"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdapterInternalClass = void 0;
var internal_order_service_1 = require("../pedidos/internal/internal-order.service");
var AdapterInternalClass = /** @class */ (function () {
    function AdapterInternalClass(description, quantity) {
        this.internalOrderService = new internal_order_service_1.InternalOrderService(description, quantity);
    }
    AdapterInternalClass.prototype.getID = function () {
        return this.internalOrderService.obtenerID();
    };
    AdapterInternalClass.prototype.getQuantity = function () {
        return this.internalOrderService.obtenerCantidad();
    };
    AdapterInternalClass.prototype.getDescription = function () {
        return this.internalOrderService.obtenerDescription();
    };
    return AdapterInternalClass;
}());
exports.AdapterInternalClass = AdapterInternalClass;

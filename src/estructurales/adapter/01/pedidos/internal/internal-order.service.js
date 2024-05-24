"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalOrderService = void 0;
var internal_order_model_1 = require("./internal-order.model");
var InternalOrderService = /** @class */ (function () {
    function InternalOrderService(description, quantity) {
        this.createOrder(description, quantity);
    }
    InternalOrderService.prototype.createOrder = function (description, quantity) {
        this.internalOrderModel = new internal_order_model_1.InternalOrderModel(description, quantity);
    };
    InternalOrderService.prototype.obtenerID = function () {
        return this.internalOrderModel.id;
    };
    InternalOrderService.prototype.obtenerCantidad = function () {
        return this.internalOrderModel.quantity;
    };
    InternalOrderService.prototype.obtenerDescription = function () {
        return this.internalOrderModel.description;
    };
    return InternalOrderService;
}());
exports.InternalOrderService = InternalOrderService;

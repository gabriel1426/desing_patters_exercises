"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalOrderService = void 0;
var external_order_model_1 = require("./external-order.model");
var ExternalOrderService = /** @class */ (function () {
    function ExternalOrderService(description, quantity) {
        this.externalOrderModel = new external_order_model_1.ExternalOrderModel(description, quantity);
    }
    ExternalOrderService.prototype.getOrderIdentifier = function () {
        return this.externalOrderModel.id;
    };
    ExternalOrderService.prototype.getItemsCount = function () {
        return this.externalOrderModel.quantity;
    };
    ExternalOrderService.prototype.getOrderDetails = function () {
        return this.externalOrderModel.description;
    };
    return ExternalOrderService;
}());
exports.ExternalOrderService = ExternalOrderService;

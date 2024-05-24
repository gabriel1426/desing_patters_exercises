"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdapterExternalClass = void 0;
var external_order_service_1 = require("../pedidos/external/external-order.service");
var AdapterExternalClass = /** @class */ (function () {
    function AdapterExternalClass(description, quantity) {
        this.externalOrderService = new external_order_service_1.ExternalOrderService(description, quantity);
    }
    AdapterExternalClass.prototype.getID = function () {
        return this.externalOrderService.getOrderIdentifier();
    };
    AdapterExternalClass.prototype.getQuantity = function () {
        return this.externalOrderService.getItemsCount();
    };
    AdapterExternalClass.prototype.getDescription = function () {
        return this.externalOrderService.getOrderDetails();
    };
    return AdapterExternalClass;
}());
exports.AdapterExternalClass = AdapterExternalClass;

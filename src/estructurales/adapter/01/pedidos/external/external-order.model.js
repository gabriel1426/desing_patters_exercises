"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalOrderModel = void 0;
var ExternalOrderModel = /** @class */ (function () {
    function ExternalOrderModel(description, quantity) {
        this.quantity = quantity;
        this.description = description;
        this.createID();
    }
    ExternalOrderModel.prototype.createID = function () {
        this.id = '987645321';
    };
    return ExternalOrderModel;
}());
exports.ExternalOrderModel = ExternalOrderModel;

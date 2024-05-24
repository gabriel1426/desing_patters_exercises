"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalOrderModel = void 0;
var InternalOrderModel = /** @class */ (function () {
    function InternalOrderModel(description, cantidad) {
        this.quantity = cantidad;
        this.description = description;
        this.crearID();
    }
    InternalOrderModel.prototype.crearID = function () {
        this.id = '123456789';
    };
    return InternalOrderModel;
}());
exports.InternalOrderModel = InternalOrderModel;

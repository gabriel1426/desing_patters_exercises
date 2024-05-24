"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedLnConnector = void 0;
var LinkedLnConnector = /** @class */ (function () {
    function LinkedLnConnector() {
    }
    LinkedLnConnector.prototype.open = function () {
        console.log("Abrí la conexión con LinkedLn");
        this.isConnected = true;
    };
    LinkedLnConnector.prototype.close = function () {
        console.log("Cerré la conexión con LinkedLn");
        this.isConnected = false;
    };
    return LinkedLnConnector;
}());
exports.LinkedLnConnector = LinkedLnConnector;

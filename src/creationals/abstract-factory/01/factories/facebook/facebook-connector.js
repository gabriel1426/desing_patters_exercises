"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacebookConnector = void 0;
var FacebookConnector = /** @class */ (function () {
    function FacebookConnector() {
    }
    FacebookConnector.prototype.open = function () {
        console.log("Abrí la conexión con facebook");
        this.isConnected = true;
    };
    FacebookConnector.prototype.close = function () {
        console.log("Cerré la conexión con facebook");
        this.isConnected = true;
    };
    return FacebookConnector;
}());
exports.FacebookConnector = FacebookConnector;

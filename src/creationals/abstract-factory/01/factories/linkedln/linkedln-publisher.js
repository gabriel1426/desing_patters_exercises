"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedLnPublisher = void 0;
var LinkedLnPublisher = /** @class */ (function () {
    function LinkedLnPublisher(connection) {
        this.connector = connection;
    }
    LinkedLnPublisher.prototype.publish = function (comment) {
        if (this.connector.isConnected) {
            console.log("Comentario realizado en LinkedLn: ".concat(comment));
        }
        else {
            console.log("No hay una conexión iniciada");
        }
    };
    return LinkedLnPublisher;
}());
exports.LinkedLnPublisher = LinkedLnPublisher;

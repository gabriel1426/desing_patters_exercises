"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacebookPublisher = void 0;
var FacebookPublisher = /** @class */ (function () {
    function FacebookPublisher(connection) {
        this.connector = connection;
    }
    FacebookPublisher.prototype.publish = function (comment) {
        if (this.connector.isConnected) {
            console.log("Comentario realizado en Facebook: ".concat(comment));
        }
        else {
            console.log("No hay una conexión iniciada");
        }
    };
    return FacebookPublisher;
}());
exports.FacebookPublisher = FacebookPublisher;

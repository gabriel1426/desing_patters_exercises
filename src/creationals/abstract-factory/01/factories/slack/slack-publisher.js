"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackPublisher = void 0;
var SlackPublisher = /** @class */ (function () {
    function SlackPublisher(connection) {
        this.connector = connection;
    }
    SlackPublisher.prototype.publish = function (comment) {
        if (this.connector.isConnected) {
            console.log("Comentario realizado en Slack: ".concat(comment));
        }
        else {
            console.log("No hay una conexión iniciada");
        }
    };
    return SlackPublisher;
}());
exports.SlackPublisher = SlackPublisher;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackConnector = void 0;
var SlackConnector = /** @class */ (function () {
    function SlackConnector() {
    }
    SlackConnector.prototype.open = function () {
        console.log("Abrí la conexión con Slack");
        this.isConnected = true;
    };
    SlackConnector.prototype.close = function () {
        console.log("Cerré la conexión con Slack");
        this.isConnected = false;
    };
    return SlackConnector;
}());
exports.SlackConnector = SlackConnector;

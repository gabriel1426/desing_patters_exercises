"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedLnFactory = void 0;
var linkedln_connector_1 = require("./linkedln-connector");
var linkedln_publisher_1 = require("./linkedln-publisher");
var LinkedLnFactory = /** @class */ (function () {
    function LinkedLnFactory() {
    }
    LinkedLnFactory.prototype.getConnector = function () {
        return new linkedln_connector_1.LinkedLnConnector();
    };
    LinkedLnFactory.prototype.getPublisher = function (connector) {
        return new linkedln_publisher_1.LinkedLnPublisher(connector);
    };
    return LinkedLnFactory;
}());
exports.LinkedLnFactory = LinkedLnFactory;

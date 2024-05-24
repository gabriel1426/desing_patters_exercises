"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacebookFactory = void 0;
var facebook_connector_1 = require("./facebook-connector");
var facebook_publisher_1 = require("./facebook-publisher");
var FacebookFactory = /** @class */ (function () {
    function FacebookFactory() {
    }
    FacebookFactory.prototype.getConnector = function () {
        return new facebook_connector_1.FacebookConnector();
    };
    FacebookFactory.prototype.getPublisher = function (connector) {
        return new facebook_publisher_1.FacebookPublisher(connector);
    };
    return FacebookFactory;
}());
exports.FacebookFactory = FacebookFactory;

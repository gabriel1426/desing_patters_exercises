"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackFactory = void 0;
var slack_connector_1 = require("./slack-connector");
var slack_publisher_1 = require("./slack-publisher");
var SlackFactory = /** @class */ (function () {
    function SlackFactory() {
    }
    SlackFactory.prototype.getConnector = function () {
        return new slack_connector_1.SlackConnector();
    };
    SlackFactory.prototype.getPublisher = function (connector) {
        return new slack_publisher_1.SlackPublisher(connector);
    };
    return SlackFactory;
}());
exports.SlackFactory = SlackFactory;

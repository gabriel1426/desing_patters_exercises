"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationManagerService = void 0;
var NotificationManagerService = /** @class */ (function () {
    function NotificationManagerService(notificator) {
        this.notificator = notificator;
    }
    NotificationManagerService.prototype.sendNotification = function (message) {
        this.notificator.send(message);
    };
    return NotificationManagerService;
}());
exports.NotificationManagerService = NotificationManagerService;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotificatorService = void 0;
var EmailNotificatorService = /** @class */ (function () {
    function EmailNotificatorService() {
    }
    EmailNotificatorService.prototype.send = function (message) {
        console.log('Mensaje Enviar: ' + message);
    };
    return EmailNotificatorService;
}());
exports.EmailNotificatorService = EmailNotificatorService;

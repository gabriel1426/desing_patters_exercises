"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsNotificatorService = void 0;
var SmsNotificatorService = /** @class */ (function () {
    function SmsNotificatorService() {
    }
    SmsNotificatorService.prototype.sendSMS = function (phoneNumber, message) {
        console.log('Mensaje Enviar SMS a' + phoneNumber + "-" + message);
    };
    return SmsNotificatorService;
}());
exports.SmsNotificatorService = SmsNotificatorService;

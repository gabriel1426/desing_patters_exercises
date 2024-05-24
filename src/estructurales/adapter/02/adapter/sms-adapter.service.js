"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsAdapterService = void 0;
var sms_notificator_service_1 = require("../notificador/sms-notificator.service");
var SmsAdapterService = /** @class */ (function () {
    function SmsAdapterService(phoneNumber) {
        this.smsService = new sms_notificator_service_1.SmsNotificatorService();
        this.phoneNumber = phoneNumber;
    }
    SmsAdapterService.prototype.send = function (message) {
        this.smsService.sendSMS(this.phoneNumber, message);
    };
    return SmsAdapterService;
}());
exports.SmsAdapterService = SmsAdapterService;

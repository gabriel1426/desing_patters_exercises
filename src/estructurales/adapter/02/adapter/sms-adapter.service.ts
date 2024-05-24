import {INotificator} from "../notificador/notificator.interface";
import {SmsNotificatorService} from "../notificador/sms-notificator.service";

export class SmsAdapterService implements INotificator {

    private smsService: SmsNotificatorService;
    private phoneNumber: string;

    constructor(phoneNumber:string){
        this.smsService = new SmsNotificatorService()
        this.phoneNumber = phoneNumber;
    }


    public send(message: string): void {
        this.smsService.sendSMS(this.phoneNumber, message);
    }
}

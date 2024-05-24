export class SmsNotificatorService {
    public sendSMS( phoneNumber: string, message: string): void {
        console.log('Mensaje Enviar SMS a' + phoneNumber + "-" + message);
    }
}

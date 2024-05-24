import {INotificator} from "./notificador/notificator.interface";
import {EmailNotificatorService} from "./notificador/email-notificator.service";
import {NotificationManagerService} from "./notification-manager.service";
import {SmsAdapterService} from "./adapter/sms-adapter.service";
import {SmsNotificatorService} from "./notificador/sms-notificator.service";


const emailNotificator: INotificator = new EmailNotificatorService();

const smsNotificator: INotificator = new SmsAdapterService( '1234567890');


const sistemaEmail: NotificationManagerService = new NotificationManagerService(emailNotificator);
const sistemaSMS: NotificationManagerService = new NotificationManagerService(smsNotificator);



sistemaEmail.sendNotification('Mensaje de prueba');
sistemaSMS.sendNotification('Mensaje mensaje fue por SMS');

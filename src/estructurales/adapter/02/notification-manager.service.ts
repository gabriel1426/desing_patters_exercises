import { INotificator } from "./notificador/notificator.interface";

export class NotificationManagerService {
    private notificator: INotificator;

    constructor(notificator: INotificator) {
        this.notificator = notificator;
    }

    public sendNotification(message: string): void {
        this.notificator.send(message);
    }
}

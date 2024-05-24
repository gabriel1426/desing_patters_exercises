import { INotificator } from "./notificator.interface";

export class EmailNotificatorService implements INotificator {

    public send(message: string): void {
        console.log('Mensaje Enviar: ' + message);
    }
}

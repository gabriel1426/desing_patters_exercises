import {IConectorInterface} from "../conector.interface";

export class SlackConnector implements IConectorInterface {

    isConnected: boolean;

    open() {
        console.log("Abrí la conexión con Slack");
        this.isConnected = true;
    }
    close() {
        console.log("Cerré la conexión con Slack");
        this.isConnected = false;
    }

}

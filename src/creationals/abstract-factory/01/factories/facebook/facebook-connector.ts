import {IConectorInterface} from "../conector.interface";

export class FacebookConnector implements IConectorInterface{

    isConnected:boolean;

    open() {
        console.log("Abrí la conexión con facebook");
        this.isConnected = true;
    }
    close() {
        console.log("Cerré la conexión con facebook");
        this.isConnected = true;
    }
}

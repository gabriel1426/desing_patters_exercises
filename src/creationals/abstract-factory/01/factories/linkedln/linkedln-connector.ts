import {IConectorInterface} from "../conector.interface";

export class LinkedLnConnector implements IConectorInterface{

    isConnected: boolean;

    open() {
        console.log("Abrí la conexión con LinkedLn");
        this.isConnected = true;
    }
    close() {
        console.log("Cerré la conexión con LinkedLn");
        this.isConnected = false;
    }

}

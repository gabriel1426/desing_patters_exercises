import {IPublisherInterface} from "../publisher.interface";
import {IConectorInterface} from "../conector.interface";

export class FacebookPublisher implements IPublisherInterface {

    connector: IConectorInterface;

    constructor(connection: IConectorInterface) {
        this.connector = connection;
    }

    publish(comment: string) {
        if (this.connector.isConnected){
            console.log(`Comentario realizado en Facebook: ${comment}`);
        } else {
            console.log("No hay una conexión iniciada");
        }
    }
}

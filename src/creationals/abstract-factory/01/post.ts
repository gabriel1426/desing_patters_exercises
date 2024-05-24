import {IFactoryInterface} from "./factory.interface";

export class Post {

    constructor(private content: string) {
    }

    public send(factory: IFactoryInterface): void {

        const connection = factory.getConnector();
        const publisher = factory.getPublisher(connection);

        connection.open();
        publisher.publish(this.content);
        connection.close();

    }
}

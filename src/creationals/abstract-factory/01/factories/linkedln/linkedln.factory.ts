import {IFactoryInterface} from "../../factory.interface";
import {IConectorInterface} from "../conector.interface";
import {LinkedLnConnector} from "./linkedln-connector";
import {LinkedLnPublisher} from "./linkedln-publisher";
import {IPublisherInterface} from "../publisher.interface";

export class LinkedLnFactory implements IFactoryInterface {

    getConnector(): IConectorInterface {
        return new LinkedLnConnector()
    }

    getPublisher(connector: IConectorInterface): IPublisherInterface {
        return new LinkedLnPublisher(connector);
    }

}

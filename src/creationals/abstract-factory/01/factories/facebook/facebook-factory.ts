import {IFactoryInterface} from "../../factory.interface";
import {FacebookConnector} from "./facebook-connector";
import {IConectorInterface} from "../conector.interface";
import {IPublisherInterface} from "../publisher.interface";
import {FacebookPublisher} from "./facebook-publisher";

export class FacebookFactory implements IFactoryInterface{

    getConnector(): IConectorInterface {
        return new FacebookConnector();
    }

    getPublisher(connector: IConectorInterface): IPublisherInterface {
        return new FacebookPublisher(connector);
    }
}

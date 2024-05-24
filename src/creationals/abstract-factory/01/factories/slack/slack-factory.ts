import {IFactoryInterface} from "../../factory.interface";
import {IConectorInterface} from "../conector.interface";
import {SlackConnector} from "./slack-connector";
import {SlackPublisher} from "./slack-publisher";
import {IPublisherInterface} from "../publisher.interface";

export class SlackFactory implements IFactoryInterface {

    getConnector(): IConectorInterface {
        return new SlackConnector();
    }

    getPublisher(connector: IConectorInterface): IPublisherInterface {
        return new SlackPublisher(connector);
    }

}

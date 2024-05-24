import {IConectorInterface} from "./factories/conector.interface";
import {IPublisherInterface} from "./factories/publisher.interface";

export interface IFactoryInterface {
    getConnector(): IConectorInterface;
    getPublisher(connector: IConectorInterface): IPublisherInterface;
}

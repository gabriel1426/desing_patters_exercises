import {IConectorInterface} from "./conector.interface";

export interface IPublisherInterface {
    connector: IConectorInterface
    publish(comment: string): void;
}

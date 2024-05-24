export interface IConectorInterface {

    isConnected: boolean;

    open(): void;
    close(): void;
}

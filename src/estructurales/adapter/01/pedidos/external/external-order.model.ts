export class ExternalOrderModel {
    public id!: string;
    public quantity: number;
    public description: string;

    constructor(description: string, quantity: number) {
        this.quantity = quantity;
        this.description = description;
        this.createID()
    }

    public createID(): void {
        this.id = '987645321';
    }
}

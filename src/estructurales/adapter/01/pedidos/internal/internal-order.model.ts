
export class InternalOrderModel {
    public id!: string;
    public quantity: number;
    public description: string;

    constructor(description: string, cantidad: number) {
        this.quantity = cantidad;
        this.description = description;
        this.crearID()
    }

    public crearID(): void {
        this.id = '123456789';
    }
}

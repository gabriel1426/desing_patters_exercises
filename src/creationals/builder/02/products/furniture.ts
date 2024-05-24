export class Furniture {

    public material: string;
    public size: string;
    public color: string;

    public constructor() { }

    public getMaterial(): string {
        return this.material;
    }

    public getSize(): string {
        return this.size;
    }

    public getColor(): string {
        return this.color;
    }
}

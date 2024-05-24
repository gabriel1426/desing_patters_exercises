export class Piernas {
    public material: string = '';
    public tamaño: string = '';
    public color: string = '';
    public dedos: number = 0;

    public printPiernas(): void {
        console.log(`Material: ${this.material}`);
        console.log(`Tamaño: ${this.tamaño}`);
        console.log(`Color: ${this.color}`);
        console.log(`Dedos: ${this.dedos}`);
    }
}

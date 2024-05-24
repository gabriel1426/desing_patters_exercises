export class Brazos {
    public material: string = '';
    public tamaño: string = '';
    public color: string = '';
    public dedos: number = 0;

    public printBrazos(): void {
        console.log(`Material: ${this.material}`);
        console.log(`Tamaño: ${this.tamaño}`);
        console.log(`Color: ${this.color}`);
        console.log(`Dedos: ${this.dedos}`);
    }
}

export class Torso {
    public material: string = '';
    public tamaño: string = '';
    public color: string = '';
    public forma: string = '';

    public printTorso(): void {
        console.log(`Material: ${this.material}`);
        console.log(`Tamaño: ${this.tamaño}`);
        console.log(`Color: ${this.color}`);
        console.log(`Forma: ${this.forma}`);
    }

}

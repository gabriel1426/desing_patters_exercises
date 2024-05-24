export class Cabeza {
    public forma: string = '';
    public material: string = '';
    public tamaño: string = '';
    public color: string = '';
    public ojos: number = 0;
    public boca: number = 0;
    public nariz: number = 0;

    public printCabeza(): void {
        console.log(`Formato: ${this.forma}`);
        console.log(`Material: ${this.material}`);
        console.log(`Tamaño: ${this.tamaño}`);
        console.log(`Color: ${this.color}`);
        console.log(`Ojos: ${this.ojos}`);
        console.log(`Boca: ${this.boca}`);
        console.log(`Nariz: ${this.nariz}`);
    }
}

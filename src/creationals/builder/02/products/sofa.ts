import {Furniture} from "./furniture";

export class Sofa extends Furniture {

    public cushions: number;
    public recliner: boolean;

    getData() {
        console.log(`Tamaño: ${this.size} - Color: ${this.color} - material del tapizado: ${this.material} - Número de cojines${this.cushions} - Reclinable: ${this.recliner ? 'si' : 'no'}`);
    }
}

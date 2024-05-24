import {Furniture} from "./furniture";

export class Table extends Furniture {

    public legs: number;
    public drawer: number;

    getData() {
        console.log(`Tamaño: ${this.size} - Color: ${this.color} - Material de fabricación: ${this.material} - Número de patas: ${this.legs} - Número de cajones: ${this.drawer}`);
    }

}

import {Cabeza} from "./cabeza";
import {Brazos} from "./brazos";
import {Piernas} from "./piernas";
import {Torso} from "./torso";

export class Robot {
    public cabeza: Cabeza | undefined;
    public brazos: Brazos | undefined;
    public piernas: Piernas | undefined;
    public torso: Torso | undefined;

    public printRobot(): void {
        if (this.cabeza) {
            console.log('Cabeza:');
            console.log(`Material: ${this.cabeza.material}`);
            console.log(`Tamaño: ${this.cabeza.tamaño}`);
            console.log(`Color: ${this.cabeza.color}`);
            console.log(`Forma: ${this.cabeza.forma}`);
        }

        if (this.brazos) {
            console.log('Brazos:');
            console.log(`Material: ${this.brazos.material}`);
            console.log(`Tamaño: ${this.brazos.tamaño}`);
            console.log(`Color: ${this.brazos.color}`);
            console.log(`Dedos: ${this.brazos.dedos}`);
        }

        if (this.piernas) {
            console.log('Piernas:');
            console.log(`Material: ${this.piernas.material}`);
            console.log(`Tamaño: ${this.piernas.tamaño}`);
            console.log(`Color: ${this.piernas.color}`);
            console.log(`Dedos: ${this.piernas.dedos}`);
        }

        if (this.torso) {
            console.log('Torso:');
            console.log(`Material: ${this.torso.material}`);
            console.log(`Tamaño: ${this.torso.tamaño}`);
            console.log(`Color: ${this.torso.color}`);
            console.log(`Forma: ${this.torso.forma}`);
        }

    }



}

import {Brazos} from "../product/brazos";
import {IBuilder} from "./IBuilder";

export class BrazosBuilder implements IBuilder {

    private brazos: Brazos;

    constructor() {
        this.brazos = new Brazos();
        this.reset();
    }

    reset(){
        this.brazos = new Brazos();
        return this;
    }

    withMaterial(material: string): this {
        this.brazos.material = material;
        return this;
    }

    withTamaño(tamaño: string): this {
        this.brazos.tamaño = tamaño;
        return this;
    }

    withColor(color: string): this {
        this.brazos.color = color;
        return this;
    }

    withDedos(dedos: number): this {
        this.brazos.dedos = dedos;
        return this;
    }

    build(): Brazos {
        const brazos = this.brazos;
        this.reset();
        return brazos;
    }
}

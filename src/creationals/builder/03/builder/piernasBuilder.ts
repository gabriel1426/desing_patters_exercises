import {Piernas} from "../product/piernas";
import {IBuilder} from "./IBuilder";

export class PiernasBuilder implements IBuilder  {
    private piernas: Piernas;

    constructor() {
        this.piernas = new Piernas();
        this.reset();
    }

    reset(){
        this.piernas = new Piernas();
        return this;
    }

    withMaterial(material: string): this {
        this.piernas.material = material;
        return this;
    }

    withTamaño(tamaño: string): this {
        this.piernas.tamaño = tamaño;
        return this;
    }

    withColor(color: string): this {
        this.piernas.color = color;
        return this;
    }

    withDedos(dedos: number): this {
        this.piernas.dedos = dedos;
        return this;
    }

    build(): Piernas {
        const piernas = this.piernas;
        this.reset();
        return piernas;
    }
}

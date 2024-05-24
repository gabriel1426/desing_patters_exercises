import {Torso} from "../product/torso";
import {IBuilder} from "./IBuilder";

export class TorsoBuilder implements IBuilder  {
    private torso: Torso;

    constructor() {
        this.torso = new Torso();
        this.reset();
    }

    public reset(){
        this.torso = new Torso();
        return this;
    }

    public withMaterial(material: string): this {
        this.torso.material = material;
        return this;
    }

    public withTamaño(tamaño: string): this {
        this.torso.tamaño = tamaño;
        return this;
    }

    public withColor(color: string): this {
        this.torso.color = color;
        return this;
    }

    public withForma(forma: string): this {
        this.torso.forma = forma;
        return this;
    }

    public build(): Torso {
        const torso = this.torso;
        this.reset();
        return torso;
    }
}

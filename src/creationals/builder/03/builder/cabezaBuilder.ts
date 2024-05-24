import {Person} from "../../01/products/person";
import {Cabeza} from "../product/cabeza";
import {IBuilder} from "./IBuilder";

export class CabezaBuilder implements IBuilder  {
    private cabeza: Cabeza;

    constructor() {
        this.cabeza = new Cabeza();
        this.reset();
    }

    reset(){
        this.cabeza = new Cabeza();
        return this;
    }

    withForma(forma: string): this {
        this.cabeza.forma = forma;
        return this;
    }

    withMaterial(material: string): this {
        this.cabeza.material = material;
        return this;
    }

    withTamaño(tamaño: string): this {
        this.cabeza.tamaño = tamaño;
        return this;
    }

    withColor(color: string): this {
        this.cabeza.color = color;
        return this;
    }

    withOjos(ojos: number): this {
        this.cabeza.ojos = ojos;
        return this;
    }

    withBoca(boca: number): this {
        this.cabeza.boca = boca;
        return this;
    }

    withNariz(nariz: number): this {
        this.cabeza.nariz = nariz;
        return this;
    }

    build(): Cabeza {
        const cabeza = this.cabeza;
        this.reset();
        return cabeza;
    }


}

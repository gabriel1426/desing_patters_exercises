
import {Furniture} from "../products/furniture";
import {IFurnitureBuilderInterface} from "./furniture-builder.interface";
import {Sofa} from "../products/sofa";

export class SofaBuilder implements IFurnitureBuilderInterface{

    private sofa: Sofa;

    constructor() {
        this.reset();
    }

    reset() {
        this.sofa = new Sofa();
    }

    setSize(size: string) {
        this.sofa.size = size;
    }

    setColor(color: string) {
        this.sofa.color = color;
    }

    setMaterial(material: string) {
        this.sofa.material = material;
    }

    setCushions(numCushions: number) {
        this.sofa.cushions = numCushions;
    }

    addRecliner() {
        this.sofa.recliner = true;
    }

    getFurniture(): Sofa {
        const sofa: Sofa = this.sofa;
        this.reset();
        return sofa;
    }
    
}

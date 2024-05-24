import {IAbstractUnitFactoryInterface} from "../../abstract-unit-factory.interface";
import {IUnitInterface} from "../unit.interface";
import {HumanSoldier} from "./unit/human-soldier";
import {HumanArcher} from "./unit/human-archer";
import {HumanWizard} from "./unit/human-wizard";

export class HumanFactory implements IAbstractUnitFactoryInterface {

    constructor() {
        console.log("Unidad de Humanos");
    }

    createArcher(): IUnitInterface {
        return new HumanArcher();
    }

    createSoldier(): IUnitInterface {
        return new HumanSoldier();
    }

    createWizard(): IUnitInterface {
        return new HumanWizard();
    }

}

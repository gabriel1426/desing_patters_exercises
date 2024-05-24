import {IUnitInterface} from "../unit.interface";
import {IAbstractUnitFactoryInterface} from "../../abstract-unit-factory.interface";
import {OrcosArcher} from "./unit/orcos-archer";
import {OrcosSoldier} from "./unit/orcos-soldier";
import {OrcosWizard} from "./unit/orcos-wizard";

export class OrcosFactory implements IAbstractUnitFactoryInterface {

    constructor() {
        console.log("Unidad de orcos");
    }

    createArcher(): IUnitInterface {
        return new OrcosArcher();
    }

    createSoldier(): IUnitInterface {
        return new OrcosSoldier();
    }

    createWizard(): IUnitInterface {
        return new OrcosWizard();
    }

}

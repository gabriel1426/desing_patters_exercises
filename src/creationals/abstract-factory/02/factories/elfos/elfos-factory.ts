import {IUnitInterface} from "../unit.interface";
import {IAbstractUnitFactoryInterface} from "../../abstract-unit-factory.interface";
import {ElfosArcher} from "./unit/elfos-archer";
import {ElfosSoldier} from "./unit/elfos-soldier";
import {ElfosWizard} from "./unit/elfos-wizard";

export class ElfosFactory implements IAbstractUnitFactoryInterface {

    constructor() {
        console.log("Unidad de Elfos");
    }

    createArcher(): IUnitInterface {
        return new ElfosArcher();
    }

    createSoldier(): IUnitInterface {
        return new ElfosSoldier();
    }

    createWizard(): IUnitInterface {
        return new ElfosWizard();
    }

}

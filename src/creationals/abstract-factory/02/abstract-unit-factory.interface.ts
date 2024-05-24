import {IUnitInterface} from "./factories/unit.interface";

export interface IAbstractUnitFactoryInterface {

    createSoldier(): IUnitInterface;
    createArcher(): IUnitInterface;
    createWizard(): IUnitInterface;

}

import {ICharacterInterface} from "./character.interface";

export class WizardClass extends ICharacterInterface {

    create() {
        this.name = "Wizard";
        this.level = 39;
        this.hp = 50;
        this.mp = 100;
        this.weapon = "Staff";
        this.armor = "Robe";
    }
}

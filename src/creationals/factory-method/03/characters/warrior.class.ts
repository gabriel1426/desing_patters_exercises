import { ICharacterInterface } from "./character.interface";

export class WarriorClass extends ICharacterInterface {

    create() {
        this.name = "Warrior";
        this.level = 80;
        this.hp = 100;
        this.mp = 20;
        this.weapon = "Sword";
        this.armor = "Heavy Armor";
    }
}

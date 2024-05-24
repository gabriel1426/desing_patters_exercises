import {ICharacterInterface} from "./character.interface";

export class ArcherClass extends ICharacterInterface {

    create() {
        this.name = "Archer";
        this.level = 60;
        this.hp = 75;
        this.mp = 50;
        this.weapon = "Bow";
        this.armor = "Leather Armor";
    }



}

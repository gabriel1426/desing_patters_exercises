import {CharacterFactoryClass} from "./character-factory.class";
import {WarriorClass} from "../characters/warrior.class";

export class WarriorFactoryClass extends CharacterFactoryClass{

    createCharacter(): WarriorClass {
        const warrior = new WarriorClass();
        warrior.create();
        return warrior;
    }

}

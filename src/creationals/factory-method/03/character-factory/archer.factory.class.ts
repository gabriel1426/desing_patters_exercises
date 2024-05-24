import {CharacterFactoryClass} from "./character-factory.class";
import {ArcherClass} from "../characters/archer.class";

export class ArcherFactoryClass extends CharacterFactoryClass{

    createCharacter(): ArcherClass {
        const archer = new ArcherClass();
        archer.create();
        return archer;
    }

}

import {ICharacterInterface} from "../characters/character.interface";

export abstract class CharacterFactoryClass {

    abstract createCharacter(): ICharacterInterface;

}

import {CharacterFactoryClass} from "./character-factory/character-factory.class";

export class Game {

    createCharacter(character: CharacterFactoryClass) {

        const newCharacter = character.createCharacter();
        newCharacter.getData();

    }
}

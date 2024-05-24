import {CharacterFactoryClass} from "./character-factory.class";
import {WizardClass} from "../characters/wizard.class";

export class WizardFactoryClass extends CharacterFactoryClass{

    createCharacter(): WizardClass {
        const wizard = new WizardClass()
        wizard.create();
        return wizard;
    }

}

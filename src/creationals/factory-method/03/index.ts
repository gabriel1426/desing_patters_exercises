import {Game} from "./game";
import {WizardFactoryClass} from "./character-factory/wizard.factory.class";
import {WarriorFactoryClass} from "./character-factory/warrior-factory.class";
import {ArcherFactoryClass} from "./character-factory/archer.factory.class";

const game =  new Game();

game.createCharacter(new WarriorFactoryClass());
game.createCharacter(new WizardFactoryClass());
game.createCharacter(new ArcherFactoryClass());

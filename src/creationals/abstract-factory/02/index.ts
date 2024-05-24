import {Game} from "./game";
import {HumanFactory} from "./factories/human/human-factory";
import {ElfosFactory} from "./factories/elfos/elfos-factory";
import {OrcosFactory} from "./factories/orcos/orcos-factory";


const game = new Game();

game.createUnit(new HumanFactory());
game.equiparUnidad();
game.atacar();


game.createUnit(new ElfosFactory());
game.equiparUnidad();
game.atacar();

game.createUnit(new OrcosFactory());
game.equiparUnidad();
game.atacar();

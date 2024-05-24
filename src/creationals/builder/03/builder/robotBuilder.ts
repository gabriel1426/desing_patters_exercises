import {Robot} from "../product/robot";
import {Cabeza} from "../product/cabeza";
import {Brazos} from "../product/brazos";
import {Piernas} from "../product/piernas";
import {Torso} from "../product/torso";
import {IBuilder} from "./IBuilder";

export class RobotBuilder implements IBuilder  {
    private robot: Robot;

    constructor() {
        this.robot = new Robot();
        this.reset();
    }

    public reset(){
        this.robot = new Robot();
        return this;
    }

   public withCabeza(cabeza: Cabeza): this {
        this.robot.cabeza = cabeza;
        return this;
   }

    public withBrazos(brazos: Brazos): this {
          this.robot.brazos = brazos;
          return this;
    }

    public withPiernas(piernas: Piernas): this {
        this.robot.piernas = piernas;
        return this;
    }

    public withTorso(torso: Torso): this {
        this.robot.torso = torso;
        return this;
    }

    public build(): Robot {
        const robot = this.robot;
        this.reset();
        return robot;
    }
}

import {IBuilder} from "../builder/IBuilder";
import {CabezaBuilder} from "../builder/cabezaBuilder";
import {BrazosBuilder} from "../builder/brazosBuilder";
import {PiernasBuilder} from "../builder/piernasBuilder";
import {TorsoBuilder} from "../builder/torsoBuilder";
import {RobotBuilder} from "../builder/robotBuilder";
import {Robot} from "../product/robot";

export class RobotDirector {

    /*
    El robot modelo 1 tiene un torso cuadrado, gris, de madera, dos brazos largos, grises y de madera y 1 pierna corta gris de madera

     */
    createRobotModel1(builder: IBuilder): Robot{
        const cabeza = new CabezaBuilder();
        cabeza.withColor('Gris').withForma('Cuadrada').withMaterial('Madera').withTamaño('Mediano');

        const brazos = new BrazosBuilder();
        brazos.withColor('Gris').withMaterial('Madera').withTamaño('Largo').withDedos(5);

        const piernas = new PiernasBuilder();
        piernas.withColor('Gris').withMaterial('Madera').withTamaño('Corto').withDedos(5);

        const torso = new TorsoBuilder();
        torso.withColor('Gris').withMaterial('Madera').withTamaño('Mediano').withForma('cuadrado');

        return this.buildRobot(builder, cabeza, brazos, piernas, torso)

    }


    /*
    El robot modelo 2 tiene un torso redondo, blanco, de metal, dos brazos cortos, blancos y de metal y 2 piernas largas blancas de metal
     */

    createRobotModel2(builder: IBuilder): Robot {
        const cabeza = new CabezaBuilder();
        cabeza.withColor('Blanco').withForma('Redonda').withMaterial('Metal').withTamaño('Mediano');

        const brazos = new BrazosBuilder();
        brazos.withColor('Blanco').withMaterial('Metal').withTamaño('Corto').withDedos(5);

        const piernas = new PiernasBuilder();
        piernas.withColor('Blanco').withMaterial('Metal').withTamaño('Largo').withDedos(5);

        const torso = new TorsoBuilder();
        torso.withColor('Blanco').withMaterial('Metal').withTamaño('Mediano').withForma('Redondo');

        return this.buildRobot(builder, cabeza, brazos, piernas, torso)
    }

    private buildRobot(builder: IBuilder, cabeza?: CabezaBuilder, brazos?: BrazosBuilder, piernas?: PiernasBuilder, torso?: TorsoBuilder): Robot {
        if (cabeza) {
            (builder as RobotBuilder).withCabeza(cabeza.build());
        }

        if (brazos) {
            (builder as RobotBuilder).withBrazos(brazos.build());
        }

        if (piernas) {
            (builder as RobotBuilder).withPiernas(piernas.build());
        }

        if (torso) {
            (builder as RobotBuilder).withTorso(torso.build());
        }

        return builder.build()
    }

}

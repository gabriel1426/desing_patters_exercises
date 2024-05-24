"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RobotDirector = void 0;
var cabezaBuilder_1 = require("../builder/cabezaBuilder");
var brazosBuilder_1 = require("../builder/brazosBuilder");
var piernasBuilder_1 = require("../builder/piernasBuilder");
var torsoBuilder_1 = require("../builder/torsoBuilder");
var RobotDirector = /** @class */ (function () {
    function RobotDirector() {
    }
    /*
    El robot modelo 1 tiene un torso cuadrado, gris, de madera, dos brazos largos, grises y de madera y 1 pierna corta gris de madera

     */
    RobotDirector.prototype.createRobotModel1 = function (builder) {
        var cabeza = new cabezaBuilder_1.CabezaBuilder();
        cabeza.withColor('Gris').withForma('Cuadrada').withMaterial('Madera').withTamaño('Mediano');
        var brazos = new brazosBuilder_1.BrazosBuilder();
        brazos.withColor('Gris').withMaterial('Madera').withTamaño('Largo').withDedos(5);
        var piernas = new piernasBuilder_1.PiernasBuilder();
        piernas.withColor('Gris').withMaterial('Madera').withTamaño('Corto').withDedos(5);
        var torso = new torsoBuilder_1.TorsoBuilder();
        torso.withColor('Gris').withMaterial('Madera').withTamaño('Mediano').withForma('cuadrado');
        return this.buildRobot(builder, cabeza, brazos, piernas, torso);
    };
    /*
    El robot modelo 2 tiene un torso redondo, blanco, de metal, dos brazos cortos, blancos y de metal y 2 piernas largas blancas de metal
     */
    RobotDirector.prototype.createRobotModel2 = function (builder) {
        var cabeza = new cabezaBuilder_1.CabezaBuilder();
        cabeza.withColor('Blanco').withForma('Redonda').withMaterial('Metal').withTamaño('Mediano');
        var brazos = new brazosBuilder_1.BrazosBuilder();
        brazos.withColor('Blanco').withMaterial('Metal').withTamaño('Corto').withDedos(5);
        var piernas = new piernasBuilder_1.PiernasBuilder();
        piernas.withColor('Blanco').withMaterial('Metal').withTamaño('Largo').withDedos(5);
        var torso = new torsoBuilder_1.TorsoBuilder();
        torso.withColor('Blanco').withMaterial('Metal').withTamaño('Mediano').withForma('Redondo');
        return this.buildRobot(builder, cabeza, brazos, piernas, torso);
    };
    RobotDirector.prototype.buildRobot = function (builder, cabeza, brazos, piernas, torso) {
        if (cabeza) {
            builder.withCabeza(cabeza.build());
        }
        if (brazos) {
            builder.withBrazos(brazos.build());
        }
        if (piernas) {
            builder.withPiernas(piernas.build());
        }
        if (torso) {
            builder.withTorso(torso.build());
        }
        return builder.build();
    };
    return RobotDirector;
}());
exports.RobotDirector = RobotDirector;

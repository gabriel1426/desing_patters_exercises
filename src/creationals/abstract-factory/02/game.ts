import {IAbstractUnitFactoryInterface} from "./abstract-unit-factory.interface";
import {IUnitInterface} from "./factories/unit.interface";
import {IWeaponInterface} from "./factories/weapon.interface";

export class Game {

    private arquero: IUnitInterface;
    private soldado: IUnitInterface;
    private mago: IUnitInterface;

    private armaArquero: IWeaponInterface;
    private armaSoldado: IWeaponInterface;
    private armaMago: IWeaponInterface;

    createUnit(unit: IAbstractUnitFactoryInterface) {
        this.arquero =  unit.createArcher();
        this.soldado = unit.createSoldier();
        this.mago = unit.createWizard();

    }

    equiparUnidad() {
        this.armaArquero = this.arquero.getWeapon();
        this.armaSoldado = this.soldado.getWeapon();
        this.armaMago = this.mago.getWeapon();
    }

    atacar(){
        this.arquero.attack(this.armaArquero);
        this.soldado.attack(this.armaSoldado);
        this.mago.attack(this.armaMago);
    }

}

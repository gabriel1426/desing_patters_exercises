import {IUnitInterface} from "../../unit.interface";
import {IWeaponInterface} from "../../weapon.interface";
import {OrcosShortDistanceWeapon} from "../weapon/orcos-short-distance-weapon";

export class OrcosSoldier implements IUnitInterface {

    public health = 100;
    public damage = 10;
    public speed = 5;
    public weapon: IWeaponInterface;

    getWeapon(): IWeaponInterface {
        return new OrcosShortDistanceWeapon();
    }

    attack(weapon: IWeaponInterface) {
        weapon.use(this.damage);
    }

    public move() {
        console.log('El soldado orco se mueve estruendosamente');
    }

}

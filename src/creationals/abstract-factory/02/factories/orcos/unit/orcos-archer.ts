import {IUnitInterface} from "../../unit.interface";
import {IWeaponInterface} from "../../weapon.interface";
import {OrcosLargeDistanceWeapon} from "../weapon/orcos-large-distance-weapon";

export class OrcosArcher implements IUnitInterface {

    public health = 100;
    public damage = 18;
    public speed = 3;

    getWeapon(): IWeaponInterface {
        return new OrcosLargeDistanceWeapon();
    }

    attack(weapon: IWeaponInterface) {
        weapon.use(this.damage);
    }

    public move() {
        console.log('El arquero orco corre rápidamente');
    }

}

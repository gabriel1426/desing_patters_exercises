import {IUnitInterface} from "../../unit.interface";
import {IWeaponInterface} from "../../weapon.interface";
import {HumanLargeDistanceWeapon} from "../weapon/human-large-distance-weapon";

export class HumanArcher implements IUnitInterface {

    public health = 100;
    public damage = 15;
    public speed = 6;

    getWeapon(): IWeaponInterface {
        return new HumanLargeDistanceWeapon();
    }

    attack(weapon: IWeaponInterface) {
        weapon.use(this.damage);
    }

    public move() {
        console.log('El arquero humano se sigilosamente');
    }

}

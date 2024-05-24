import {IUnitInterface} from "../../unit.interface";
import {IWeaponInterface} from "../../weapon.interface";
import {HumanShortDistanceWeapon} from "../weapon/human-short-distance-weapon";

export class HumanSoldier implements IUnitInterface {

    public health = 130;
    public damage = 18;
    public speed = 8;

    getWeapon(): IWeaponInterface {
        return new HumanShortDistanceWeapon();
    }

    attack(weapon: IWeaponInterface) {
        weapon.use(this.damage);
    }

    public move() {
        console.log('El soldado humano se mueve hacia a delante');
    }

}

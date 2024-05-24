import {IUnitInterface} from "../../unit.interface";
import {IWeaponInterface} from "../../weapon.interface";
import {HumanShortDistanceWeapon} from "../../human/weapon/human-short-distance-weapon";
import {ElfosShortWeapon} from "../weapon/elfos-short-weapon";

export class ElfosSoldier implements IUnitInterface {

    public health = 150;
    public damage = 9;
    public speed = 6;
    public weapon: IWeaponInterface;

    getWeapon(): IWeaponInterface {
        return new ElfosShortWeapon();
    }

    attack(weapon: IWeaponInterface) {
        weapon.use(this.damage);
    }

    public move() {
        console.log('El soldado elfo se mueve entra los arboles');
    }

}

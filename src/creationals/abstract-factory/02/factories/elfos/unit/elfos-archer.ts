import {IUnitInterface} from "../../unit.interface";
import {IWeaponInterface} from "../../weapon.interface";
import {ElfosLargeDistanceWeapon} from "../weapon/elfos-large-distance-weapon";

export class ElfosArcher implements IUnitInterface {

    public health = 200;
    public damage = 11;
    public speed = 6;

    getWeapon(): IWeaponInterface {
        return new ElfosLargeDistanceWeapon();
    }

    attack(weapon: IWeaponInterface) {
        weapon.use(this.damage);
    }

    public move() {
        console.log('El arquero elfo se silenciosamente');
    }

}

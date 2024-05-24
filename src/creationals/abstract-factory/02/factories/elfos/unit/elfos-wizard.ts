import {IUnitInterface} from "../../unit.interface";
import {IWeaponInterface} from "../../weapon.interface";
import {ElfosMagicWeapon} from "../weapon/elfos-magic-weapon";

export class ElfosWizard implements IUnitInterface {

    public health = 230;
    public damage = 25;
    public speed = 4;
    public weapon: IWeaponInterface;

    getWeapon(): IWeaponInterface {
        return new ElfosMagicWeapon();
    }

    attack(weapon: IWeaponInterface) {
        weapon.use(this.damage);
    }

    public move() {
        console.log('El mago elfo camina en el agua');
    }

}

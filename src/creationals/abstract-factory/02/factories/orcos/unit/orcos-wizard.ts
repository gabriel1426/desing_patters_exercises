import {IUnitInterface} from "../../unit.interface";
import {IWeaponInterface} from "../../weapon.interface";
import {OrcosMagicWeapon} from "../weapon/orcos-magic-weapon";

export class OrcosWizard implements IUnitInterface {

    public health = 50;
    public damage = 20;
    public speed = 4;
    public weapon: IWeaponInterface;

    getWeapon(): IWeaponInterface {
        return new OrcosMagicWeapon();
    }

    attack(weapon: IWeaponInterface) {
        weapon.use(this.damage);
    }

    public move() {
        console.log('El mago orco se teletransporta');
    }

}

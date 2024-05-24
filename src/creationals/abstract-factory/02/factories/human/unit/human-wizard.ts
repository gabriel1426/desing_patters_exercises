import {IUnitInterface} from "../../unit.interface";
import {IWeaponInterface} from "../../weapon.interface";
import {HumanMagicWeapon} from "../weapon/human-magic-weapon";

export class HumanWizard implements IUnitInterface {

    public health = 150;
    public damage = 26;
    public speed = 3;
    public weapon: IWeaponInterface;

    getWeapon(): IWeaponInterface {
        return new HumanMagicWeapon();
    }

    attack(weapon: IWeaponInterface) {
        weapon.use(this.damage);
    }

    public move() {
        console.log('El mago humano flota en el aire');
    }

}

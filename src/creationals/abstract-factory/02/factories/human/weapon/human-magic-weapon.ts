import {IWeaponInterface} from "../../weapon.interface";

export class HumanMagicWeapon implements IWeaponInterface {

    name= "Hechizo de fuego";
    damage = 30;

    use(damage: number) {
        console.log(`Ataque usando un ${this.name} e hizo un daño total de ${this.damage + damage}`)
    }

}

import {IWeaponInterface} from "../../weapon.interface";

export class ElfosMagicWeapon implements IWeaponInterface {

    name= "Hechizo de naturaleza";
    damage = 21;

    use(damage: number) {
        console.log(`Ataque usando un ${this.name} e hizo un daño total de ${this.damage + damage}`)
    }

}

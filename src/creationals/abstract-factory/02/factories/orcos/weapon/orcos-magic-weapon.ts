import {IWeaponInterface} from "../../weapon.interface";

export class OrcosMagicWeapon implements IWeaponInterface {

    name= "Hechizo de oscuridad";
    damage = 17;

    use(damage: number) {
        console.log(`Ataque usando un ${this.name} e hizo un daño total de ${this.damage + damage}`)
    }

}

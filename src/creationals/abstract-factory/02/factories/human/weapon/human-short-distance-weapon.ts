import {IWeaponInterface} from "../../weapon.interface";

export class HumanShortDistanceWeapon implements IWeaponInterface {

    name= "Espada";
    damage = 17;

    use(damage: number) {
        console.log(`Ataque usando una ${this.name} e hizo un daño total de ${this.damage + damage}`)
    }

}


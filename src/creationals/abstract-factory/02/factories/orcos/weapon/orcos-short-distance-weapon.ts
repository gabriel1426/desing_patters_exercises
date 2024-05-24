import {IWeaponInterface} from "../../weapon.interface";

export class OrcosShortDistanceWeapon implements IWeaponInterface {

    name= "Hacha";
    damage = 8;

    use(damage: number) {
        console.log(`Ataque usando una ${this.name} e hizo un daño total de ${this.damage + damage}`)
    }

}


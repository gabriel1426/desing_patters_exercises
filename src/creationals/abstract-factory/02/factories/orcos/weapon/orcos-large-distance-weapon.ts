import {IWeaponInterface} from "../../weapon.interface";

export class OrcosLargeDistanceWeapon implements  IWeaponInterface {

    name= "Ballesta";
    damage = 13;

    use(damage: number) {
        console.log(`Ataque usando un ${this.name} e hizo un daño total de ${this.damage + damage}`)
    }

}

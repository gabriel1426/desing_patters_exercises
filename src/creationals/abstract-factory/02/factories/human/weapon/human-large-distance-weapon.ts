import {IWeaponInterface} from "../../weapon.interface";


export class HumanLargeDistanceWeapon implements  IWeaponInterface {

    name= "Lanza";
    damage = 15;

    use(damage: number) {
        console.log(`Ataque usando una ${this.name} e hizo un daño total de ${this.damage + damage}`)
    }

}

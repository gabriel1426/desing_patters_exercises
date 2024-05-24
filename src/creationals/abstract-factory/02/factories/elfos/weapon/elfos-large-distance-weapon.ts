import {IWeaponInterface} from "../../weapon.interface";

export class ElfosLargeDistanceWeapon implements  IWeaponInterface {

    name= "Arco";
    damage = 10;

    use(damage: number) {
        console.log(`Ataque usando un ${this.name} e hizo un daño total de ${this.damage + damage}`)
    }

}

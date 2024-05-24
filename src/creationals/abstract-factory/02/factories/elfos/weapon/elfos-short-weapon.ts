import {IWeaponInterface} from "../../weapon.interface";

export class ElfosShortWeapon implements IWeaponInterface {

    name= "Dagas";
    damage = 12;

    use(damage: number) {
        console.log(`Ataque usando una ${this.name} e hizo un daño total de ${this.damage + damage}`)
    }

}


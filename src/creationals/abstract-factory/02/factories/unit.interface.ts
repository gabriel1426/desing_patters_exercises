import {IWeaponInterface} from "./weapon.interface";

export interface IUnitInterface {
    health: number;
    damage: number;
    speed: number;
    getWeapon(): IWeaponInterface;
    attack(weapon: IWeaponInterface): void;
    move(): void;

}

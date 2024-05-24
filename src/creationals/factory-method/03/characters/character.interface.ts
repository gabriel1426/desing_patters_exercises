export abstract class ICharacterInterface {
    name: string;
    level: number;
    hp: number;
    mp: number;
    weapon: string;
    armor: string;

    abstract create(): void;

    getData() {
        console.log(`Yo sou un ${this.name} a nivel ${this.level}`);
    };
}

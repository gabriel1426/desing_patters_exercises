import {IBuilder} from "./builder";
import {Animal} from "../products/animal";

export class AnimalBuilder implements IBuilder{

    private animal: Animal;
    constructor() {
        this.reset();
    }

    reset(){
        this.animal = new Animal();
    }

    setName(name: string): void {
        this.animal.name = name;
    }

    setAge(age: number): void {
        this.animal.age = age;
    }

    setCountry(country: string): void {
        this.animal.country = country;
    }

    getResult() : Animal{
        const animal =  this.animal;
        this.reset();
        return animal;
    }



}

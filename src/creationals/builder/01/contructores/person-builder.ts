import {IBuilder} from "./builder";
import {Person} from "../products/person";

export class PersonBuilder implements IBuilder {

    private person: Person;
    constructor() {
        this.person = new Person();
        this.reset();
    }

    reset(){
        this.person = new Person();
        return this;
    }

    setName(name: string): void {
        this.person.name = name;
    }

    setLastName(lastName: string): void {
        this.person.lastName = lastName;
    }

    setAge(age: number): void {
        this.person.age = age;
    }

    setCountry(country: string): void {
        this.person.country = country;
    }

    setCity(city: string): void {
        this.person.city = city;
    }

    getResult() : Person {
        const person =  this.person;
        this.reset();
        return person;
    }
}

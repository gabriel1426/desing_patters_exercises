import {IBuilder} from "../contructores/builder";
import {PersonBuilder} from "../contructores/person-builder";
import {Person} from "../products/person";
import {AnimalBuilder} from "../contructores/animal-builder";
import {Animal} from "../products/animal";

export class Director {

    constructor() {}

    cretePerson( { nombre, edad, pais, apellido, ciudad }): Person {
        let person: PersonBuilder = new PersonBuilder();
        person.setName(nombre);
        person.setAge(edad);
        person.setCountry(pais);
        person.setLastName(apellido);
        person.setCity(ciudad);
        return person.getResult();
    }

    createAnimal(): Animal {
        let animal: AnimalBuilder = new AnimalBuilder();
        animal.setName('Muñeca');
        animal.setCountry('colombia');
        animal.setAge(5)

        return animal.getResult();
    }

}

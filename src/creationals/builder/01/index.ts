import {PersonBuilder} from "./contructores/person-builder";
import {Director} from "./director/director";
import {AnimalBuilder} from "./contructores/animal-builder";

// creamos un objeto Persona


let director = new Director();
const person = director.cretePerson({nombre: 'Juan', edad: 25, pais: 'Colombia', apellido: 'Perez', ciudad: 'Bogota'});
person.getData();

const person2 = director.cretePerson({nombre: 'Pedro', edad: 30, pais: 'Colombia', apellido: 'Perez', ciudad: 'Cúcuta'});
person2.getData();


// creamos un objeto animal
director = new Director();
director.createAnimal();
const animal = director.createAnimal();
animal.getData();




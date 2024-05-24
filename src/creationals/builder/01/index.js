"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var director_1 = require("./director/director");
// creamos un objeto Persona
var director = new director_1.Director();
var person = director.cretePerson({ nombre: 'Juan', edad: 25, pais: 'Colombia', apellido: 'Perez', ciudad: 'Bogota' });
person.getData();
var person2 = director.cretePerson({ nombre: 'Pedro', edad: 30, pais: 'Colombia', apellido: 'Perez', ciudad: 'Cúcuta' });
person2.getData();
// creamos un objeto animal
director = new director_1.Director();
director.createAnimal();
var animal = director.createAnimal();
animal.getData();

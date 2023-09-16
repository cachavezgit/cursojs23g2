"use strict";
class Persona {
    constructor(nombre, apellido, edad, trabajoFijo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.trabajoFijo = trabajoFijo;
    }
    nombreCompleto() {
        return `${this.nombre} ${this.apellido} ${this.edad}`;
    }
    proceso() {
        console.log("Proceso");
    }
}
class Empleado extends Persona {
    constructor(nombre, apellido, edad, trabajoFijo) {
        super(nombre, apellido, edad, trabajoFijo);
    }
    proceso() {
        console.log("Proceso Empleado");
    }
}
let persona = new Persona("Juan", "Pérez", 25, false);
console.log(persona.nombreCompleto());

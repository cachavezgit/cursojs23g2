class Persona {
    nombre: string;
    apellido: string;
    edad: number;
    trabajoFijo: boolean;

    constructor(nombre: string, apellido: string, edad: number, trabajoFijo: boolean) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.trabajoFijo = trabajoFijo;
    }

    nombreCompleto(): string {
        return `${this.nombre} ${this.apellido} ${this.edad}`;
    }

    proceso():void {
        console.log("Proceso");
    }
}

class Empleado extends Persona { 
    constructor(nombre: string, apellido: string, edad: number, trabajoFijo: boolean) {
        super(nombre, apellido, edad, trabajoFijo);
    }

    proceso():void {
        console.log("Proceso Empleado");
    }
}

let persona:Persona = new Persona("Juan", "Pérez", 25 ,false);

console.log(persona.nombreCompleto());
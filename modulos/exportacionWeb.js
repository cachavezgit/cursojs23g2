export const PI = Math.PI;

export class Cuadrado {
    constructor(lado) {
        this.lado = lado;
    }
    areaDelCuadrado() {
        return this.lado * this.lado;
    }
}

export function saludaAlUsuario(usuario) {
    alert(`Hola ${usuario}`)
}
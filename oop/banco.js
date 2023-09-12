class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    imprimeDetallesCuenta() {
        console.log(`Titular: ${this.titular} Saldo: ${this.saldo} `);
    }
}

class Pagare extends CuentaBancaria {
    constructor(titular, saldo, tasaDeInversion) { 
        super(titular, saldo);
        this.tasaDeInversion = tasaDeInversion;
    }

    imprimeDetallesCuenta() {
        super.imprimeDetallesCuenta();
        console.log(`Tasa de Inversion: ${this.tasaDeInversion}`);
    }
}

class TarjetaDeCredito extends CuentaBancaria { 
    constructor(titular, saldo, limiteDeCredito) { 
        super(titular, saldo); 
        this.limiteDeCredito = limiteDeCredito;
    }

    imprimeDetallesCuenta() {
        super.imprimeDetallesCuenta();
        console.log(`Limite de Credito: ${this.limiteDeCredito}`);
    }
}

const pagare1 = new Pagare('Juan', 1000, 13.5);
const tc1 = new TarjetaDeCredito('Manuel', 500, 47000);

pagare1.imprimeDetallesCuenta();
tc1.imprimeDetallesCuenta();
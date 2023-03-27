// PUNTO 2

const cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar(dinero){
    this.saldo += dinero;
  },
  extraer(extraccion){
    if (extraccion > this.saldo) {
      document.write("No hay saldo disponible para extracción");
    } else {
      this.saldo -= extraccion;
    }
  },
  informar(){
    document.write(`Hola ${cuenta.titular} su cuenta tiene $${cuenta.saldo} <br>`);
  }
};


console.log(cuenta.informar());
console.log(cuenta.ingresar(30));
console.log(cuenta.extraer(10));
console.log(cuenta.informar());
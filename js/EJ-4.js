// PUNTO 4

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    console.log(
      `El codigo es ${this.codigo} del producto ${this.nombre} tiene un precio de: ${this.precio}`
    );
  }
}

let productosVarios = [
  new Producto("2332", "Remera", "$1500"),
  new Producto("4135", "Short", "$800"),
  new Producto("1224", "Medias", "$500"),
];

console.log(
  productosVarios.forEach((productosVarios) => productosVarios.imprimeDatos())
);

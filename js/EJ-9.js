// PUNTO 9

class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    console.log(`fuuuush`);
  }
}

class Perro extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }

  emitirSonido() {
    console.log(`El perro ${this.nombre} hace GUAUUU`);
  }
}

class Gato extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }

  emitirSonido() {
    console.log(`El gato ${this.nombre} hace MIAAAU`);
  }
}

const perrito = new Perro("Coco", 1);
const gatito = new Gato("Simba", 3);

console.log(perrito.emitirSonido());
console.log(gatito.emitirSonido());

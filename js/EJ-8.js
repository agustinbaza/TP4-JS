// PUNTO 8

class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre}, un gusto!`);
  }
  despedirse() {
    console.log(`Chau, debo irme a trabajar, soy ${this.profesion}!`);
  }
}

const persona1 = new Persona("Pedro", 25, "abogado");
const persona2 = new Persona("Juana", 33, "cocinera");

console.log(persona1.saludar());
console.log(persona1.despedirse());

console.log(persona2.saludar());
console.log(persona2.despedirse());

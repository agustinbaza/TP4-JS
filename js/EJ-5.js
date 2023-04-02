// PUNTO 5

class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, año) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.año = año;
  }

  mostrarGeneracion(año) {
    switch (true) {
      case año >= 1930 && año <= 1948:
        document.write("Pertenece a Silent Generation <br>");
        break;
      case año >= 1949 && año <= 1968:
        document.write("Pertenece a Baby Boom <br>");
        break;
      case año >= 1969 && año <= 1980:
        document.write("Pertenece a Generacion X <br>");
        break;
      case año >= 1981 && año <= 1993:
        document.write("Pertenece a Generacion Y <br>");
        break;
      case año >= 1994 && año <= 2010:
        document.write("Pertenece a Generacion Z <br>");
        break;
      default:
        document.write("Su edad no esta en el rango generacional <br>");
    }
  }

  esMayorDeEdad(edad) {
    if (edad >= 18) {
      document.write("Es mayor de edad");
    } else {
      document.write("Es menor de edad");
    }
  }

  mostrarDatos() {
    document.write(`<h4> DATOS DE LA PERSONA </h4>`);
    document.write(`<ul>`);
    document.write(`<li> ${NuevaPersona.nombre} </li>`);
    document.write(`<li> ${NuevaPersona.edad} </li>`);
    document.write(`<li> ${NuevaPersona.DNI} </li>`);
    document.write(`<li> ${NuevaPersona.sexo} </li>`);
    document.write(`<li> ${NuevaPersona.peso} </li>`);
    document.write(`<li> ${NuevaPersona.altura} </li>`);
    document.write(`<li> ${NuevaPersona.año} </li>`);
    document.write(`</ul>`);
  }

  generarDNI() {
    let crearDNI = Math.floor(Math.random() * 90000000) + 10000000;
    document.write(`El DNI generado es: ${crearDNI}`);
  }
}

let NuevaPersona = new Persona(
  "Lionel",
  "35",
  "33.546.890",
  "M",
  "60kg",
  "1,70cm",
  1987
);

console.log(NuevaPersona.mostrarGeneracion(NuevaPersona.año));
console.log(NuevaPersona.esMayorDeEdad(NuevaPersona.edad));
console.log(NuevaPersona.mostrarDatos());
console.log(NuevaPersona.generarDNI());

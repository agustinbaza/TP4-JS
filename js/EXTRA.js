// PIEDRA, PAPEL O TIJERA

let valor = prompt("Ingrese su elección").toUpperCase();

let random = Math.floor(Math.random() * 3 + 1);

function aleatorio(random) {
  switch (random) {
    case 1:
      return("PIEDRA");
    case 2:
      return("PAPEL");
    case 3:
      return("TIJERA");
    default:
      return("el valor no esta en el rango");
  }
}

function eleccion(valor) {
    let maquina = aleatorio(random);

    switch (valor) {
      case "PIEDRA":
        if (maquina === "TIJERA") {
          alert(`Tu elegiste ${valor} y la maquina eligio TIJERA, por lo tanto GANASTE !!!`);
        } else if (maquina === "PAPEL") {
          alert(`Tu elegiste ${valor} y la maquina eligio PAPEL, por lo tanto PERDISTE :((`);
        } else {
          alert(`Tu elegiste ${valor} y la maquina eligio PIEDRA, por lo tanto EMPATARON`);
        }
        break;
      case "PAPEL":
        if (maquina === "PIEDRA") {
          alert(`Tu elegiste ${valor} y la maquina eligio PIEDRA, por lo tanto GANASTE !!!`);
        } else if (maquina === "TIJERA") {
          alert(`Tu elegiste ${valor} y la maquina eligio TIJERA, por lo tanto PERDISTE :((`);
        } else {
          alert(`Tu elegiste ${valor} y la maquina eligio PAPEL, por lo tanto EMPATARON`);
        }
        break;
      case "TIJERA":
        if (maquina === "PAPEL") {
          alert(`Tu elegiste ${valor} y la maquina eligiO PAPEL, por lo tanto GANASTE !!!`);
        } else if (maquina === "PIEDRA") {
          alert(`Tu elegiste ${valor} y la maquina eligio PIEDRA, por lo tanto PERDISTE :((`);
        } else {
          alert(`Tu elegiste ${valor} y la maquina eligio TIJERA, por lo tanto EMPATARON`);
        }
        break;
      default:
        alert("No ingreso valor correcto");
    }
  }
  

console.log(eleccion(valor));

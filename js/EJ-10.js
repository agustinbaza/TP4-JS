// PUNTO 10

class Aeropuerto {
    constructor(nombreAeropuerto) {
      this.nombreAeropuerto = nombreAeropuerto;
      this.listaDeAviones = [];
    }
  
    agregarAvion(avion) {
      this.listaDeAviones.push(avion);
    }
  
    buscarAvion(nombreAvion) {
      let existeAvion = listaDeAviones.includes(nombreAvion)
        ? `El avion si se encuentra`
        : `No encontramos el avion`;
      console.log(`${existeAvion}`);
    }
  }
  
  class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.listaPasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.capacidad <= this.listaPasajeros.length) {
        console.log(`No puede abordar debido a que el avion esta lleno`);
      } else {
        console.log(`El pasajero ${pasajero} puede abordar`);
      }
    }
  }
  
  const nuevoAeropuerto = new Aeropuerto("Aeropuerto Internacional");
  
  const vuelo1 = new Avion("Boeing-777", 320, "Miami");
  const vuelo2 = new Avion("Boeing-787", 435, "Madrid");
  const vuelo3 = new Avion("Boeing-797", 350, "Bogota");
  
  nuevoAeropuerto.agregarAvion("Boeing-777");
  nuevoAeropuerto.agregarAvion("Boeing-787");
  nuevoAeropuerto.agregarAvion("Boeing-797");
  
  const buscarVuelo = nuevoAeropuerto.buscarAvion("Boeing-777");
  console.log(buscarVuelo);
  
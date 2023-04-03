// PUNTO 6

class Libro {
  constructor(isbn, titulo, autor, numPags) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numPags = numPags;
  }

  get Isbn() {
    return this.isbn;
  }

  get Titulo() {
    return this.titulo;
  }

  get Autor() {
    return this.autor;
  }

  get NumPags() {
    return this.numPags;
  }

  set Isbn(isbn) {
    return (this.isbn = isbn);
  }

  set Titulo(titulo) {
    return (this.titulo = titulo);
  }

  set Autor(autor) {
    return (this.autor = autor);
  }

  set NumPags(numPags) {
    return (this.numPags = numPags);
  }

  mostrarLibro() {
    console.log(
      `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene paginas ${this.numPags}`
    );
  }
}

const libro1 = new Libro(
  9788506043660,
  "Mi planta de naranja lima",
  "Jose Mauro de Vasconcelos",
  194
);
const libro2 = new Libro(
  9780936388878,
  "Don Quijote de la Mancha",
  "Miguel de Cervantes",
  1345
);

console.log(libro1.mostrarLibro());
console.log(libro2.mostrarLibro());

if (libro1.numPags > libro2.numPags) {
  console.log("El libro 1 tiene mas paginas");
} else if (libro2.numPags > libro1.numPags) {
  console.log("El libro 2 tiene mas paginas");
} else {
  console.log("Los libros tienen la misma cantidad de paginas");
}

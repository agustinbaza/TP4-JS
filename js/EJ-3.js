// PUNTO 3

class rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  AlturaNueva(AltNueva) {
    this.alto = AltNueva;
  }
  AnchoNuevo(AnchoNuevo) {
    this.ancho = AnchoNuevo;
  }

  mostrar() {
    document.write(
      `<br> El valor de alto es: ${this.alto} y de ancho es: ${this.ancho}`
    );
  }

  calcularPerimetro() {
    let perimetro = 2 * (this.alto + this.ancho);
    document.write(`<br>El perimetro es de: ${perimetro}`);
  }

  calcularArea() {
    let area = this.alto * this.ancho;
    document.write(` <br> El área es de: ${area}`);
  }
}

const NuevoRectangulo = new rectangulo(4, 6);
NuevoRectangulo.mostrar();
NuevoRectangulo.AlturaNueva(8);
NuevoRectangulo.AnchoNuevo(12);
NuevoRectangulo.mostrar();
console.log(NuevoRectangulo.calcularPerimetro());
console.log(NuevoRectangulo.calcularArea());

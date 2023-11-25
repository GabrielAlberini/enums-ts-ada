// Un enum es un conjunto de constantes nombradas para describir un grupo de casos especifícos

const enum Talle {
  ExtraChico = "XS",
  Chico = "S",
  Mediano = "M",
  Grande = "L",
  ExtraGrande = "XL",
}

const enum Puerto {
  TCP = 3000,
  HTTP = 1234,
}

const enum Operacion {
  Suma,
  Resta,
  Multiplicacion,
  Division,
}

const talle: Talle = Talle.ExtraChico; // -> Magical string
const aplicacionWeb: Puerto = Puerto.HTTP;

const calcular = (operacion: Operacion, a: number, b: number) => {
  switch (operacion) {
    case Operacion.Suma:
      return a + b;
    case Operacion.Resta:
      return a - b;
    case Operacion.Division:
      if (b === 0) {
        return "No se puede divir por 0";
      }
      return a / b;
    case Operacion.Multiplicacion:
      return a * b;
    default:
      return "Operación incorrecta...";
  }
};

const resultado = calcular(Operacion.Suma, 1, 2);
console.log(resultado);

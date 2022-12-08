export function getDesviacion(arreglo: Array<number>, media: number) {
  let Arreglo = arreglo;
  let Media = media;
  let Acumulador = 0;
  let AcumuladorArreglo = 0;

  for (let i=0; i<Arreglo.length; i++) {
    Acumulador = Arreglo[i] - Media;
    AcumuladorArreglo = AcumuladorArreglo + (Acumulador*Acumulador);
  }

  AcumuladorArreglo = AcumuladorArreglo / ((Arreglo.length) - 1)
  AcumuladorArreglo = Math.round((AcumuladorArreglo)* 100) /100;

  let Resultado = Math.sqrt(AcumuladorArreglo);
  Resultado = Math.round(Resultado * 100)/100;

  return Resultado;
}

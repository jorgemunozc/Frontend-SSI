/**
 * Funcion extrae del formulario 29 los campos deseados.
 * @param target Formulario del cual se desea extraer la informacion
 * @param propNames codigo de los campos que se desean extraer info
 * @returns Devuelve los montos convertidos a numeros
 */

export function extractValues(target: Formulario29, propNames: string[]): number[] {
  const extractedValues: number[] = [];
  for (let i = 0; i < propNames.length; i++) {
    const prop = propNames[i];
    extractedValues[prop] = +target[prop];
  }
  return extractedValues;
}
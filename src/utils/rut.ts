export function formatearRut(rut: number, separador: string): string {
  const rutToString = rut.toString().split('');
  let rutFormateado = '';
  let i = 1;
  while (rutToString.length > 0) {
    rutFormateado += rutToString.pop()
    if (i === 3 && rutToString.length > 0) {
      rutFormateado += separador;
      i = 0
    }
    i++;
  }
  return rutFormateado
  .split('').reverse().join('');
}

export function formatearRutRegEx(rut: number, separador: string) : string {
  return rut.toString().replace('/((\d{3})+(\d))', `$1${separador}`);
}
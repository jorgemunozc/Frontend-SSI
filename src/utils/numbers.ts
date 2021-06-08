export function parseNumber(number : number | string): string {
  if (typeof number === 'number') {
    number = number.toString();
  }
  return number.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
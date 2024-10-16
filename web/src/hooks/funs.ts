/**
 * Limitar caracteres a una cadena
 *
 * @param {string} text
 * @param {number} lim
 * @param {?string} [textFin=""]
 *
 * @return {string}
 */
export const limitarCadena = (
  text: string,
  lin: number,
  textFin: string = ""
): string => (text.length > lin ? text.substring(0, lin) + textFin : text);

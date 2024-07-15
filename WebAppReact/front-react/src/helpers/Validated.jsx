/**
 *
 * @param {*} str
 * @returns
 */
export function isNullOrEmpty(str) {
  // Ejemplo de uso
  // console.log(isNumber("123"));      // -> true
  // console.log(isNumber("123.456"));  // -> true
  // console.log(isNumber("-123"));     // -> true
  // console.log(isNumber("abc123"));   // -> false
  // console.log(isNumber("   "));      // -> false

  return str === null || str === undefined || str.trim() === "";
}

/**
 *
 * @param {*} str     - El string a verificar.
 * @returns {boolean} `true` si el string es un número válido, `false` en caso contrario.
 */
export function isNumber(str) {
  if (str.trim() === "") return false; // Verifica que no sea un string vacío
  const num = parseFloat(str);
  return !isNaN(num) && isFinite(num);
}

/**
 * Verifica si una cadena representa una fecha válida según un formato y localización específicos.
 * 
 * Utiliza `Intl.DateTimeFormat` para interpretar el formato de la fecha según la localización proporcionada.
 * La función construye una expresión regular dinámica basada en el formato y verifica si la fecha es válida,
 * considerando los casos como días y meses incorrectos para fechas específicas (ej., 30 de febrero).
 * 
 * @param {string} str - La cadena que representa la fecha a validar.
 * @param {string} locale - La localización que determina cómo evaluar el formato de la fecha.
 * @param {string} format - El formato de fecha esperado, usando 'dd', 'mm', y 'yyyy' para representar el día, mes y año.
 * @returns {boolean} - Retorna true si la cadena representa una fecha válida según el formato y la localización, de lo contrario false.
 * console.log(isValidDate('31/12/2020', 'es-ES', 'dd/mm/yyyy')); // true
 * console.log(isValidDate('2020-31-12', 'en-US', 'yyyy-dd-mm')); // false, formato incorrecto para en-US

 */
export function isValidDate(str, format = "dd/mm/yyyy", locale = "es-GT") {
  // Crear una instancia de DateTimeFormat con la localización y el formato
  const formatter = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  // Determinar el separador común y construir el regex basado en el formato
  const separator = formatter
    .find((part) => part.type === "literal")
    .value.trim();
  const formatOrder = format
    .toLowerCase()
    .replace(/[^dmy]/gi, "")
    .replace(/d+/g, "dd")
    .replace(/m+/g, "mm")
    .replace(/y+/g, "yyyy");

  const formatTokens = {
    dd: "(0[1-9]|[12][0-9]|3[01])",
    mm: "(0[1-9]|1[012])",
    yyyy: "(\\d{4})",
  };

  const regexFormat = formatOrder
    .split("")
    .map((f) => formatTokens[f])
    .join(separator);
  const regex = new RegExp(`^${regexFormat}$`);

  if (!regex.test(str)) {
    return false;
  }

  // Extraer los componentes de la fecha del string
  const parts = regex.exec(str);
  const day = parseInt(parts[1], 10);
  const month = parseInt(parts[2], 10) - 1;
  const year = parseInt(parts[3], 10);

  // Construir la fecha y validarla
  const date = new Date(year, month, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day
  );
}

export function convertToDecimal(value) {
  let formatter = new Intl.NumberFormat("es-GT", {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
    useGrouping: false, // Desactivar agrupación de miles
  });
  let formattedNumber = formatter.format(value);

  return formattedNumber;
}

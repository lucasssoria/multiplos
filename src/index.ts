let num: number = Number(prompt("Ingrese un numero: "));
let multiplo: number = Number(prompt("Ingrese su 2do numero: "));

function esMultiplo(num: number, multiplo: number) {
  let resto = multiplo % num;
  if (resto === 0) {
    console.log(num + " es multiplo de " + multiplo);
    return true;
  } else {
    console.log(num + " no es multiplo de " + multiplo);
    return false;
  }
}
console.log(esMultiplo(num, multiplo));

// function multiplos() {
//   for (let i: number = num; i > multiplo; i++) {
//     if (esMultiplo(i, multiplo)) {
//       return i + " Es multiplo de " + multiplo;
//     } else {
//       return i + " No es multiplo de " + multiplo;
//     }
//   }
// }
// console.log(multiplos());

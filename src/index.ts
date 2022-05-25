let num: number = Number(prompt("Ingrese un numero: "));
let multiplo: number = Number(prompt("Ingrese su 2do numero: "));

function esMultiplo(num: number, multiplo: number) {
  let resto = multiplo % num;
  if (resto === 0) {
    return true;
  } else {
    return false;
  }
}

if (esMultiplo(num, multiplo)) {
  console.log(num + " Es multiplo de " + multiplo);
} else {
  console.log(num + " No es multiplo de " + multiplo);
}

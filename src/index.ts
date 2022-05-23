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
console.log(esMultiplo(num, multiplo));
for (let i: number = num; i < multiplo; i++) {
  if (esMultiplo(i, multiplo)) {
    console.log(i + " Es multiplo de " + multiplo);
  } else {
    console.log(i + " No es multiplo de " + multiplo);
  }
}

function mostrarTema(tema) {
  console.log(`El tema seleccionado es: ${tema}`);
}

setTimeout(mostrarTema, 2000, 'JavaScript');

function sumar(a, b) {
  console.log(a + b);
}

setTimeout(sumar, 3000, 10, 20);
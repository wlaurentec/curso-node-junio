function mostrarTema(tema) {
  console.log(`El tema seleccionado es: ${tema}`);
}

console.log("Antes")
setImmediate(mostrarTema, 'JavaScript');
console.log("Después")

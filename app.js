const fs = require("fs");

// Leer archivos

console.log("Antes de leer el archivo");

fs.readFile("index.html", "utf-8", (err, data) => {
  if (err) {
    throw err;
  } 
  console.log(data);
  
})

console.log("Despues de leer el archivo");

// Renombrar archivos

  fs.rename("index.html", "main.html", (err) => {
    if (err) {
      throw err;
    }
    console.log("Se renombro el archivo");
  })

console.log("Despues de renombrar el archivo");

// Agregar contenido al final de un archivo

fs.appendFile("main.html", "<p>Hola Mundo</p>", (err) => {
  if (err) {
    throw err;
  }
  console.log("Se agrego el contenido");
})

console.log("Despues de agregar el contenido");
// Reemplazar el contenido de un archivo

fs.writeFile("main.html", "<p>Hola Mundo</p>", (err) => {
  if (err) {
    throw err;
  }
  console.log("Se reemplazo el contenido");
})

console.log("Despues de reemplazar el contenido");
// Eliminar un archivo

fs.unlink("main.html", (err) => {
  if (err) {
    throw err;
  }
  console.log("Se elimino el archivo");
})

console.log("Despues de eliminar el archivo");
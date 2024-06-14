const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve("Promesa resuelta");
    } else {
      reject("Promesa rechazada");
    }
  }, 2000);
});

const manejarPromesaCumplida = (valor) => {
  console.log(valor);
};

const manejarPromesaRechazada = (razon) => {
  console.log(razon);
};

miPromesa
  .then(manejarPromesaCumplida, manejarPromesaRechazada);
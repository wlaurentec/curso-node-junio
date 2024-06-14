function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`1.0: Ordenando: ${producto} de freeCodeCamp`);
    setTimeout(() => {
      if (producto === "taza") {
        resolve("Pedido tomado: taza de freeCodeCamp...");
      } else {
        reject("Lo siento, no tenemos este producto");
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve, _reject) => {
    console.log(`2.0: Procesando respuesta...`);
    console.log(`3.0:La respuesta fue: ${respuesta}`);

    setTimeout(() => {
      resolve("Gracias por tu compra. Disfruta tu pedido");
    }, 4000);
  });
}

/* ordenarProducto("taza")
  .then(procesarPedido)
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error)); */


async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log(respuesta);
    const procesamiento = await procesarPedido(respuesta);
    console.log(procesamiento);
  } catch (error) {
    console.log(error);
  }
}

realizarPedido("tazas");
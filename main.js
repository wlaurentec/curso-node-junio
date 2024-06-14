const estatusPedido = () => {
  return Math.random() < 0.8;
};
const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve("Tu pedido fue aceptado");
    } else {
      reject("Tu pedido fue rechazado");
    }
  }, 2000);
});

miPedidoDePizza
  .then((mensajeDeConfirmacion) => console.log(mensajeDeConfirmacion))
  .catch((mensajeDeRechazo) => console.log(mensajeDeRechazo));


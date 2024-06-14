const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('nuevo-producto', (data) => {
  console.log('Se ha emitido el evento nuevo-producto:', data);
});

emisorProductos.emit('nuevo-producto', 'Monitor curvo de 49"');
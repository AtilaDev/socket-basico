var socket = io();

socket.on('connect', function() {
  console.log('Conectado al servidor');
});

// on: escuchar
socket.on('disconnect', function() {
  console.log('Perdimos conexión con el servidor');
});

// emit: enviar mensaje
socket.emit(
  'enviarMensaje',
  {
    usuario: 'Leandro',
    mensaje: 'Hola Mundo'
  },
  function(resp) {
    console.log('Respuesta server:', resp);
  }
);

// on: escuchar mensaje
socket.on('enviarMensaje', function(mensaje) {
  console.log('Servidor:', mensaje);
});

const { io } = require('../server');

io.on('connection', client => {
  console.log('Usuario conectado');

  client.emit('enviarMensaje', {
    usuario: 'Admin',
    mensaje: 'Bienvenido al sistema'
  });

  client.on('disconnect', () => {
    console.log('Usuario desconectado');
  });

  client.on('enviarMensaje', (data, callback) => {
    console.log(data);
    client.broadcast.emit('enviarMensaje', data);
    // if (mensaje.usuario) {
    //   callback({
    //     resp: 'SALIO TODO BIEN!'
    //   });
    // } else {
    //   callback({
    //     resp: 'SALIO TODO MAL!!!!!'
    //   });
    // }
  });
});

let gIo = null;

function connectSockets(http) {
    gIo = require('socket.io')(http, {
        cors: {
            origin: '*',
        }
    });
    gIo.on('connection', socket => {
        console.log('New socket', socket.id);

        socket.on('disconnect', () => {
            console.log('Someone disconnected')
        })
    })
}

module.exports = {
    connectSockets,
}




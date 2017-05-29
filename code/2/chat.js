var net = require('net');
var chatServer = net.createServer();
var clientList = [];

chatServer.on('connection', function (client) {
    client.name = client.remoteAddress + ':' + client.remotePort;
    client.write('Hi ' + client.name + '!\n');
    // client.write('Bye! \n');
    // client.end();

    clientList.push(client);
    client.on('data', function (data) {
        var res = data.toString();
        // console.log('req: ', data.toString());
        broadcast(res, client);
    })

    client.on('end', function () {
        console.log('log:', client.name + ' quit');
        clientList.splice(clientList.indexOf(client), 1);
    })

    client.on('error', function (e) {
        console.log('error: ', e);
    })

    function broadcast(message, client) {
        var cleanUp = [];
        for(var i = 0; i < clientList.length; i++) {
            var currCli = clientList[i];
            // clientList[i].write(res);
            if (client !== currCli) {
                if (currCli.writable) {
                    currCli.write(client.name + ' says ' + message);
                } else {
                    cleanUp.push(currCli);
                    currCli.destroy();
                }
            }
        }
        for(var i = 0; i < cleanUp.length; i++) {
            clientList.splice(clientList.indexOf(cleanUp[i]), 1);
        }
    }

})

chatServer.listen(9000, function () {
    console.log('ChatServer running success');
});


// telnet 127.0.0.1 9000
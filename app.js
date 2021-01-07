//93.162.69.98

var net = require('net');

const fn = () => {

const ss = []
setInterval(() => {
    var client = new net.Socket();
    client.connect(25565, 'beratbadat.aternost.me', function() {
        // console.log('Connected');
        client.write('Hello, server! Love, Client.');
    });

    ss.push(client)

})

}

require('http').createServer((rew , res) => res.end('hw')).listen(process.env.PORT)



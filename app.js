//93.162.69.98

var net = require('net');

const fn = () => {


setInterval(() => {
    var client = new net.Socket();
    client.connect(5000, '85.99.59.123', function() {
        // console.log('Connected');
        client.write('Hello, server! Love, Client.');
    });

    

})

}



require('http').createServer((rew , res) => res.end('hello world')).listen(process.env.PORT)



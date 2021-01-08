//93.162.69.98

var net = require('net');

const fn = () => {
 let c = 0

setInterval(() => {
    var client = new net.Socket();
    client.connect(80, 'reactjs-chat.herokuapp.com', function() {
        // console.log('Connected');
        c++
    });

    

})

}

fn()

require('http').createServer((rew , res) => res.end(c.toString())).listen(process.env.PORT)



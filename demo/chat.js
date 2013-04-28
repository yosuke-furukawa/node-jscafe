var net = require('net');
var clients = [];
var server = net.createServer(function(sock){
  sock.on('end', function(){
    clients.splice(clients.indexOf(sock), 1);
  });
  sock.resume();
  clients.forEach(function(i){
    sock.pipe(i, {end:false}).pipe(sock, {end:false});
  });
  clients.push(sock);
});

server.listen(1337);

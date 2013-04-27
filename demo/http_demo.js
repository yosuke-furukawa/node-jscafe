var http = require('http');
http.createServer(function(req, res){
  res.end("<h1>hello jscafe.</h1>");
}).listen(3000);

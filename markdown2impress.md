Node.js 入門と Socket.io によるデモ
==========

Who are you ?
----------

![icon](https://si0.twimg.com/profile_images/206948941/wall-e.jpg)

Working at : [![dena](https://www.e2r.jp/export/ja/dena2014/images/dena_logo.png)](http://dena.com/)

Twitter : [@yosuke_furukawa](https://twitter.com/yosuke_furukawa)

Blog : [from scratch](http://yosuke-furukawa.hatenablog.com/)

Community : [![node](http://joyeur.files.wordpress.com/2011/11/node_logo-01.png)](http://nodejs.jp/)

What is Node.js ?
----------

Javascript on `***` (Server, Arduino, Rapsberry PI, etc.)

Not only web browser !!!

Keywords
----------

1. Non-Blocking IO
2. Single Thread
3. Event Driven
4. process.nextTick
5. Stream

But I dont have time to talk all of these things.
---------

If you have an interest, you would read these to be better.

[![nyumon](http://ec2.images-amazon.com/images/I/511TIB5mncL._SL500_AA300_.jpg)](http://www.amazon.co.jp/%E3%82%B5%E3%83%BC%E3%83%90%E3%82%B5%E3%82%A4%E3%83%89JavaScript-Node-js%E5%85%A5%E9%96%80-%E6%B8%85%E6%B0%B4%E4%BF%8A%E5%8D%9A/dp/4048703676)

[Node.js Patterns and Opinions](https://dl.dropboxusercontent.com/u/3685/presentations/node-patterns/node-patterns.pdf)

[Node.jsとは何か(Ryan Dahlの講演)](http://www.publickey1.jp/blog/11/nodejs.html)

Play with Node!!!! 
----------
<!-- data-x="1000" -->
<!-- data-y="3000" -->
<!-- data-z="500" -->
<!-- data-scale="3" -->
<!-- data-rotate="90" -->


Hello JSCafe on HTTP
---------
<!-- data-x="2000" -->
<!-- data-y="4000" -->
<!-- data-z="500" -->
<!-- data-scale="3" -->
<!-- data-rotate="90" -->

easy to write!!

    var http = require('http');
    http.createServer(function(req, res){
      res.writeHead(200);
      res.end("<h1>hello jscafe.</h1>");
    }).listen(3000);

Hello JSCafe on chat with you.
---------

node.js chat!!

    var net = require('net');
    var clients = [];
    var server = net.createserver(function(sock){
      sock.on('end', function(){
        sock.emit('data', "goodbye!! \n");
        clients.splice(clients.indexof(sock), 1);
      });
      sock.resume();
      clients.foreach(function(i){
        sock.pipe(i, {end:false}).pipe(sock, {end:false});
      });
      clients.push(sock);
    });
    server.listen(1337);


Hello JSCafe on chat with you.
---------

please access

    $ nc <IP address> 1337

I guess my greetings reach you.
--------

Node is fun??

"I'm Fan!!"

I guess 10 minutes left....
-------
<!-- data-x="3000" -->
<!-- data-y="3000" -->
<!-- data-z="2500" -->
<!-- data-scale="3" -->
<!-- data-rotate="180" -->

Socket.io
-------

[![socket.io](http://www.tonylea.com/wp-content/uploads/2012/07/socket-io.png)](http://socket.io/)

Socket.io is a realtime library for Node.js
-------

Socket.io uses WebSocket, long polling, commet
-------


DDD
--------
'data-*' attribute for impress.js represent HTML comment.
This comment must be write in secion.

    <!-- data-x="2400" -->
    <!-- data-y="3000" -->
    <!-- data-z="-100" -->
    <!-- data-scale="10" -->
    <!-- data-rotate="90" -->

markdown2impress assume and calculate default x,y, if you do not specify this.

See [impress.js](http://bartaz.github.com/impress.js/) manual for details.

Command line options
----------

- **--width=1200**

    Width of slide.

- **--height=800**

    Height of slide.

- **--column=5**

    Column of slide.

- **--outputdir=.**

    Output directory.

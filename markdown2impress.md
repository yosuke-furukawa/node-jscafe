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
2. Callbacks
3. Single Thread
4. process.nextTick
5. Event Emitter

Non Blocking I/O
----------

    printLine("Please input your name: ");
    var name = getLine();
    var result = db.save(name);
    if (result === 'ok')
      printLine("saved!");

[reference](https://dl.dropboxusercontent.com/u/3685/presentations/node-patterns/node-patterns.pdf)
note: pseudo code.

Non Blocking I/O
----------

    printLine("Please input your name: ");
    // non blocked this line, go next.
    var name = getLine();
    // name is *undefined*.
    var result = db.save(name);
    // result is always not 'ok' !!!
    if (result === 'ok')
      printLine("saved!");

Callbacks
----------

    printLine("Please input your name: ", function(){
      getLine(function(err, name) {
        db.save(name, function(err, r) {
          if (r === 'ok')
            printLine("saved!");
        });
      });
    });


single thread
----------

    printLine("Please input your name: ", function(){
      getLine(function(err, name) {
        db.save(name, function(err, r) {
          if (r === 'ok')
            printLine("saved!");
          // add new code
          db.getAll(function(err, names) {
            names.forEach(function(name) {
              printLine(name);
            });
          });
        });
      });
    });

single thread
----------

    printLine("Please input your name: ", function(){
      getLine(function(err, name) {
        db.save(name, function(err, r) {
          if (r === 'ok')
            printLine("saved!");
          db.getAll(function(err, names) {
            // if num of names is huge.
            // stop all tasks !!!
            names.forEach(function(name) {
              printLine(name);
            });
          });
        });
      });
    });

process.nextTick
----------

    printLine("Please input your name: ", function(){
      getLine(function(err, name) {
        db.save(name, function(err, r) {
          if (r === 'ok')
            printLine("saved!");
          db.getAll(function(err, names) {
            names.forEach(function(name) {
              // Dont stop all task.
              process.nextTick(function(){
                printLine(name);
              });
            });
          });
        });
      });
    });

Crazy callbacks...
----------

    printLine("Please input your name: ", function(){
      getLine(function(err, name) {
        db.save(name, function(err, r) {
          if (r === 'ok')
            printLine("saved!");
          db.getAll(function(err, names) {
            names.forEach(function(name) {
              process.nextTick(function(){
                printLine(name);
              });
            });
          });
        });
      });
    });

Event Emitter!!
----------

    var event = new EventEmitter();
    event.on('hoge', function(arg) {
      printLine(arg);
    });
    event.emit('hoge', 'fuga');
    // print fuga

Event Emitter!!
----------

    printLine("Please input your name: ", function(){
      getLine(function(err, name) {
        db.emit('save', name);
      });
    });
    db.on('save end', function(err, r) {
      if (r === 'ok')
        printLine("saved!");
      db.emit('getAll');
    });
    db.on('getAll end', function(err, names){
      names.forEach(function(name) {
        process.nextTick(function(){
          printLine(name);
        });
      });
    });

I dont have time to talk all keywords.
---------

If you have an interest, you would read these to be better.

[![nyumon](http://ec2.images-amazon.com/images/I/511TIB5mncL._SL500_AA300_.jpg)](http://www.amazon.co.jp/%E3%82%B5%E3%83%BC%E3%83%90%E3%82%B5%E3%82%A4%E3%83%89JavaScript-Node-js%E5%85%A5%E9%96%80-%E6%B8%85%E6%B0%B4%E4%BF%8A%E5%8D%9A/dp/4048703676)

[Node.js Patterns and Opinions](https://dl.dropboxusercontent.com/u/3685/presentations/node-patterns/node-patterns.pdf)

[Node.jsとは何か(Ryan Dahlの講演)](http://www.publickey1.jp/blog/11/nodejs.html)

I guess 10 minutes left...
---------
<!-- data-scale="3"  -->
<!-- data-rotate="360" -->

Play with Node!!!!
----------


Hello JSCafe on HTTP
---------

easy to write!!

    var http = require('http');
    http.createServer(function(req, res){
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

I guess 5 minutes left....
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

Socket.io uses WebSocket, long polling, Adobe flash socket
-------

So Socket.io supports many kinds of browsers!!!
-------

1. IE 5.5+
2. Safari 3+
3. Google Chrome 4+
4. Firefox 3+
5. Opera 10.61+


Actually, this slide uses Socket.io :)
-------

A lot of demo use Socket.io
-------

+ chat
+ realtime paint
+ presentation tool

Google "socket.io chat/paint/presentation"

Socket.io is easy to use!!!
------
    var io = require('socket.io').listen(3000);
    io.sockets.on('connection', function(socket) {
      socket.on('messsage', function(message) {
        // broadcast
        io.sockets.emit('msg', message);
      });
    });

WE NEED YOU!!!
-------
*JavaScript Engineer*
*Noder*
[Join us!!!!](http://dena.com/recruit/)
![dena](https://www.e2r.jp/export/ja/dena2014/images/dena_logo.png)

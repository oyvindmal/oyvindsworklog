/*var http = require('http')

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port);*/

var express = require('express');

var port = process.env.PORT || 1337;
var app = express();
var http = require('http').Server(app);
app.get('/', function (req, res) {
  res.send('Hello World from Express!');
});

http.listen(port, function() {
  console.log("lol");
})

/*var server = app.listen(port, function () {
  var host = server.address().address;


  console.log('Example app listening at http://%s:%s', host, port);
});
*/
//the end

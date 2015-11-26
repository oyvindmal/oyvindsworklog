/*var http = require('http')

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port);*/

var express = require('express');
var fs = require('fs');
var markdown = require( "markdown" ).markdown;
var port = process.env.PORT || 1337;
var app = express();
var http = require('http').Server(app);
app.get('/', function (req, res) {
  fs.readFile('./content/index.md', 'utf8', function(err, contents) {
    res.send(markdown.toHTML(contents));
  });
});
  app.get('/:filename(\\w+)', function (req, res) {

    var renderfile = req.params.filename;
    var filepath = './content/' + renderfile + '.md';
    try {
      fs.statSync(filepath);
      fs.readFile(filepath, 'utf8', function(err, contents) {
         res.send(markdown.toHTML(contents));
       });
    }

    catch (e)
    {
      res.send("not found");
    }
  /*  if(fs.statSync(filepath) != undefined)
    {
      fs.readFile(filepath, 'utf8', function(err, contents) {
         res.send(markdown.toHTML(contents));
       });
    }

    else {
      res.send("Not found");
    }*/

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

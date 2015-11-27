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
app.set('view engine', 'jade');
app.get('/', function (req, res) {
  fs.readFile('./content/index.md', 'utf8', function(err, contents) {
      res.render('standardpage', {'markdownhtml': markdown.toHTML(contents)});
  });


});

app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/img', express.static('img'));
  app.get('/z/:filename(\\w+)', function (req, res) {

    var renderfile = req.params.filename;
    var filepath = './content/' + renderfile + '.md';
    try {
      fs.statSync(filepath);
      fs.readFile(filepath, 'utf8', function(err, contents) {
        res.render('standardpage', {'markdownhtml': markdown.toHTML(contents)});
       });
    }

    catch (e)
    {
      res.send("not found");
    }
});

http.listen(port, function() {
  console.log("lol");
})

function getTemplateFile(templatename){
    var path = "./templates/" + templatename + ".html";
    return fs.readFileSync(path);
}

var express = require('express');
var fs = require('fs');
//var markdown = require( "markdown" ).markdown; // to be removed
var marked = require('marked');
var mdh = require('./helpers/markdown.js');
var bch = require('./helpers/blogcontent.js');

var port = process.env.PORT || 1337;
var app = express();
var http = require('http').Server(app);
app.set('view engine', 'jade');
app.get('/', function (req, res) {
  fs.readFile('./content/index.md', 'utf8', function(err, contents) {
      res.render('frontpage', {'markdownhtml': marked(contents)});
  });


});

app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/img', express.static('img'));
  app.get('/page/:filename(\\w+)', function (req, res) {

    var renderfile = req.params.filename;
    var filepath = './content/' + renderfile + '.md';
    try {
      fs.statSync(filepath);
      fs.readFile(filepath, 'utf8', function(err, contents) {
        res.render('standardpage', {'markdownhtml': marked(contents)});
       });
    }

    catch (e)
    {
      res.send("not found");
    }
});

app.get('/blog', function (req, res) {
  console.log(bch.getBlogpostsOrderByDate());
  res.render('blogfront', {"blogposts": bch.getBlogpostsOrderByDate()});

})

app.get('/blog/:filename(\\w+)', function (req, res) {

  var renderfile = req.params.filename;
  var filepath = './content/blog/' + renderfile + '.md';
  try {
    fs.statSync(filepath);

    var dataobj = mdh.getMetadataForPost(renderfile);
    dataobj.markdownhtml = mdh.getHTMLContentForPost(renderfile);
    res.render('blogpost', dataobj)
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

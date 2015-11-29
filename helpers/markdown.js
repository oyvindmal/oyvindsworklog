var fs = require('fs');
var mde = require('markdown-extra');
var markdown = require( "markdown" ).markdown;
var basepath = './../content/';

module.exports.hello = function () {
  console.log("Hello World");
};

module.exports.getMetadataForPost = function (filename) {
  var contents = fs.readFileSync('./content/blog/' + filename + '.md', 'utf8');
  var metad = MetaToObject(mde.metadata(contents));
  metad.title = mde.heading(contents);
  metad.filename = filename;

  return metad;

};

module.exports.getContentForPost = function (filename) {
  var contents = fs.readFileSync('./content/blog/' + filename + '.md', 'utf8');
      return mde.content(contents);
};
module.exports.getHTMLContentForPost = function (filename) {
  var contents = fs.readFileSync('./content/blog/' + filename + '.md', 'utf8');
      var content = mde.content(contents);

      return markdown.toHTML(content)
};


function MetaToObject(data) {
    var lines = data.split('\r\n')
    var outputobject = {};
    lines.forEach(function (entry){
      var entrylines = entry.split(': ');
      outputobject[entrylines[0]] = entrylines[1];

    })
    return outputobject;
}

var mdh = require("./markdown.js")
var fs = require("fs");
module.exports.getBlogpostsOrderByDate = function () {
  var postarray = [];
  var filelist =  fs.readdirSync('./content/blog');
  filelist.forEach(function (file) {
    var filename = file.substr(0, file.length -3);
    console.log("Filename: " + filename);
      var mdata = mdh.getMetadataForPost(filename);
      var content = mdh.getHTMLContentForPost(filename);

      var match = content.match(/<!-- StartExcerpt -->((?:(?!<!-- EndExcerpt -->)[\s\S])*)/);
      if(match)
      {
        mdata.excerpt = match[1];
      }
      else
      {
        mdata.excerpt = "";
      }
      postarray.push(mdata);



  });

  postarray.sort(function(a,b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
});
console.log(postarray);
  return postarray;
};

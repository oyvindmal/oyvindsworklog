var mdh = require("./markdown.js")
var fs = require("fs");
module.exports.getBlogpostsOrderByDate = function () {
  var postarray = [];
  var filelist =  fs.readdirSync('./content/blog');
  filelist.forEach(function (file) {
    var filename = file.substr(0, file.length -3);
      var mdata = mdh.getMetadataForPost(filename);

      postarray.push(mdata);



  });

  postarray.sort(function(a,b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
});
  return postarray;
};

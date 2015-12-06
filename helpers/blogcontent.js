var mdh = require("./markdown.js")
var fs = require("fs");
var _ = require('underscore');
module.exports.getBlogpostsOrderByDate = function () {
  var postarray = [];
  var filelist =  fs.readdirSync('./content/blog');
  filelist.forEach(function (file) {
    var filename = file.substr(0, file.length -3);
    console.log("Filename: " + filename);
      var mdata = mdh.getMetadataForPost(filename);
      var content = mdh.getHTMLContentForPost(filename);
      var tags = mdata.tags;
      var tagarray = tags.split(',');
      mdata.tags=tagarray;
      var match = content.match(/<!-- StartExcerpt -->((?:(?!<!-- EndExcerpt -->)[\s\S])*)/);
      if(match)
      {
        mdata.excerpt = match[1];
      }
      else
      {
        mdata.excerpt = "";
      }
      if(mdata.status !== "draft") {
      postarray.push(mdata);

    }



  });

  postarray.sort(function(a,b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
});
console.log(postarray);
  return postarray;
};

module.exports.getDistinctTags = function () {
  var tags = [];
  var postarray = [];
  var filelist =  fs.readdirSync('./content/blog');
  filelist.forEach(function (file) {
    var filename = file.substr(0, file.length -3);
    console.log("Filename: " + filename);
      var mdata = mdh.getMetadataForPost(filename);
      var content = mdh.getHTMLContentForPost(filename);
      var tags = mdata.tags;
      var tagarray = tags.split(',');
      mdata.tags=tagarray;
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

  postarray.forEach(function (post) {
      post.tags.forEach(function (tag) {
          tags.push(tag);

      })
  })
  return _.uniq(tags);
}

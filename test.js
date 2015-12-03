var bch = require('./helpers/blogcontent.js');
var mdh = require('./helpers/markdown.js');

var teststring =  mdh.getHTMLContentForPost("0112TellstickSammenligning");
var match = teststring.match(/<!-- StartExcerpt -->((?:(?!<!-- EndExcerpt -->)[\s\S])*)/);

console.log(match[1]);

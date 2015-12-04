$(document).ready(function () {
  $.getJSON('/api/blog', function (data) {
      //console.log(data);
      var container = $("#blogcontent");
      $.each(data, function (index, value) {
          var obj = data[index];
          console.log(obj);
            var bp = $("<div />");
            bp.addClass("row post")

            var imgdiv = $("<div />");
            imgdiv.addClass("medium-3 large-3 columns");
            var img = $("<img />")
            img.attr('src', '/img/blog/' + obj.image);
            img.appendTo(imgdiv);
            imgdiv.appendTo(bp);

            var postdiv = $("<div />");
            postdiv.addClass("medium-9 large-9 columns");
            var heading = $("<h2 />");
            heading.html(obj.title);
            heading.appendTo(postdiv);
            var excerpt = $("<div />");
            excerpt.html(obj.excerpt);

            excerpt.appendTo(postdiv);

            postdiv.appendTo(bp);
            var readmorec = $("<p />");
            var rmlink = $("<a />");
            rmlink.attr('href', '/blog/' + obj.filename);
            rmlink.html('Permanent lenke')
            rmlink.appendTo(readmorec);
            readmorec.appendTo(postdiv);

            bp.appendTo(container);
      })


  })

})

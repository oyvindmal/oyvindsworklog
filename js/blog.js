$(document).ready(function () {
  $.getJSON('/api/blog', function (data) {
      //console.log(data);
      var container = $("#blogcontent");
      $.each(data, function (index, value) {
          var obj = data[index];
          console.log(obj);
            var bp = $("<div />");
            var heading = $("<h2 />");
            heading.html(obj.title);
            heading.appendTo(bp);
            var excerpt = $("<div />");
            excerpt.html(obj.excerpt);
            excerpt.appendTo(bp);
            var readmorec = $("<p />");
            var rmlink = $("<a />");
            rmlink.attr('href', '/blog/' + obj.filename);
            rmlink.html('Permanent lenke')
            rmlink.appendTo(readmorec);
            readmorec.appendTo(bp);

            bp.appendTo(container);
      })


  })

})

$.getJSON("assets/results.json", function(json) {
      for (var o = 0; o < json.length; o++) {
        $('.images-list').append('<li><img src=' + json[o].imgUrl + '</img></li>');
      }
});

$('.images-list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
$.getJSON("assets/results.json", function(json) {
      for (var o = 0; o < json.length; o++) {
        $('.instagram-carousel').append('<img src=' + json[o].imgUrl + '></>');
      }
});

$('.instagram-carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
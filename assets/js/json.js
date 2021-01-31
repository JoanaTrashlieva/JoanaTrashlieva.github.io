$.getJSON("assets/results.json", function(json) {
      for (var o = 0; o < json.length; o++) {
        console.log(json[o].imgUrl);
        $('.images-list').append('<li><img src=' + json[o].imgUrl + '></></li>');
      }
});

$('.images-list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
$.getJSON("assets/results.json", function(json) {
  for (var o = 0; o < json.length; o++) {
    $('.instagram-carousel').append('<img src=' + json[o].imgUrl + '></>');
  }

  $('.instagram-carousel').slick({
    centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });
});


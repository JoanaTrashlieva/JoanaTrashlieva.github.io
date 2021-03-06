$.getJSON("assets/results.json", function(json) {
  for (var o = 0; o < json.length; o++) {
    $('.instagram-carousel').append('<a href='+ json[o].imgUrl + '><img src=' + json[o].imgUrl + '></></>');
  }
});

$(document).ready(function() {
	$('.instagram-carousel').magnificPopup({
		delegate: 'a',
		type:'image'
	});

	$('#articles').DataTable({
		"pageLength": 5
	});
});


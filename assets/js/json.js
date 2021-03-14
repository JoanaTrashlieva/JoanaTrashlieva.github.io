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

	$('.bball-photos').magnificPopup({
		delegate: 'a',
		type:'image'
	});

	$('#articles').DataTable({
		"pageLength": 5
	});

	$('.multiple-items').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 3
	  });
			  
});

function openPart(evt, partName) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(partName).style.display = "block";
	evt.currentTarget.className += " active";
  }
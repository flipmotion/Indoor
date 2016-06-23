 $(document).ready(function() {
 	var opt =  {
 		0 : {
 			items : 2
 		},
 		480 : {
 			items : 2
 		},
 		768 : {
 			items : 3
 		},
 		992 : {
 			items : 5
 		},
 	};
 	function slider(sliderName,count,resp) {
 		$(sliderName).owlCarousel({
 			items : count,
 			loop:true,
 			nav:true,
 			pagination: false,
 			navText: [
 			"<i class='my-arrow-left'></i>",
 			"<i class='my-arrow-right'></i>"
 			],
 			responsive: resp
 		});
 	};
 	slider('[data-slider="1"]',1, false);
 	slider('[data-slider="5"]',5, opt);
 	

 	$('[data-slider="main"]').owlCarousel({
 		items : 1,
 		loop:true,
 		nav:true,
 		pagination: false,
 		// autoplay: true,
 		// autoplayTimeout: 3000,
 		dotsContainer: '#dots',
 		navContainer: '#navs',
 		navText: [
 		"<i class='my-arrow-left'></i>",
 		"<i class='my-arrow-right'></i>"
 		]
 	});
 	

 	$('[data-select="new"]').select2({
 		theme: "bootstrap",
 		minimumResultsForSearch: Infinity
 	});

 	send();
 	var form = $('[data-form="send"]');
 	$(form).validator().on('submit', function (e) {
 		if ($(this).hasClass('disabled')) {
			// handle the invalid form...
			e.preventDefault();
		} else {
			// everything looks good!
			send();
		}
	});

 });
 function initMap() {
 	var map = new google.maps.Map(document.getElementById('map'), {
 		zoom: 17,
 		disableDefaultUI: true,
 		scrollwheel: false,
 		center: {lat: 55.7069159, lng: 37.501391900000044}
 	});

 	var image = 'assets/img/g-pin.png';
 	var pin = new google.maps.Marker({
 		position: {lat: 55.7069159, lng: 37.501391900000044},
 		map: map,
 		icon: {
 			url:image,
 			size: new google.maps.Size(224, 80),
 			origin: new google.maps.Point(0, 0),
 			anchor: new google.maps.Point(0, 0)
 		}
 	});
 }
 function send(){
 	var form = $('[data-form="send"]');
 	form.ajaxForm(function() {

 		$('#call1').modal('hide');
 		$('#call2').modal('hide');
 		$('#call3').modal('hide');
 		$('#call4').modal('hide');
 		$('#call5').modal('hide');
 		$('#call6').modal('hide');
 		$('#thx').modal('show');
 		$(form).resetForm();
 	});
 }



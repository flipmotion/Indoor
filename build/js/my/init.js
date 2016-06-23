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



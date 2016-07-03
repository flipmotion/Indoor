"use strict";

$(document).ready(function () {
  var opt = {
    0: {
      items: 2
    },
    480: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 5
    }
  };
  function slider(sliderName, count, resp) {
    $(sliderName).owlCarousel({
      items: count,
      loop: true,
      nav: true,
      pagination: false,
      navText: ["<i class='my-arrow-left'></i>", "<i class='my-arrow-right'></i>"],
      responsive: resp
    });
  };
  slider('[data-slider="1"]', 1, false);
  slider('[data-slider="5"]', 5, opt);

  $('[data-slider="main"]').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    pagination: false,
    // autoplay: true,
    // autoplayTimeout: 3000,
    dotsContainer: '#menu .nav',
    navContainer: '#navs',
    navText: ["<i class='my-arrow-left'></i>", "<i class='my-arrow-right'></i>"]
  });
  var nav = $('#menu');
  nav.find('li').on('click', function (e) {
    var dataIndex = $(this).data('item');
    console.log(dataIndex);
    $('[data-slider="main"]').trigger('to.owl.carousel', [dataIndex, 300]);
  });

  $('[data-select="new"]').select2({
    theme: "bootstrap",
    minimumResultsForSearch: Infinity
  });

  $('#call').on('show.bs.modal', function (event) {
    var btn = $(event.relatedTarget),
        text = btn.data('whatever'),
        modalTitle = $(this).find('.modal-body h3');
    modalTitle.text(text);
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
  $('.btn-toggle').click(function () {
    $(this).find('.btn').toggleClass('active');

    if ($(this).find('.btn-primary').size() > 0) {
      $(this).find('.btn').toggleClass('btn-primary');
    }
  });
});

function send() {
  var form = $('[data-form="send"]');
  form.ajaxForm(function () {

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

var LocationData = [[49.2812668, -123.1035942, "<div class='g-maps-baloon'><div><img src='assets/img/map-item-1.png'></div><div><p>БЦ «Башня Федерации» 1</p><p>Пресненская наб., 12, Москва 1</p></div></div>"], [49.2814064, -123.1025187, "<div class='g-maps-baloon'><div><img src='assets/img/map-item-1.png'></div><div><p>БЦ «Башня Федерации» 2</p><p>Пресненская наб., 12, Москва 2</p></div></div>"], [49.2812336, -123.1020622, "<div class='g-maps-baloon'><div><img src='assets/img/map-item-1.png'></div><div><p>БЦ «Башня Федерации» 3</p><p>Пресненская наб., 12, Москва 3</p></div></div>"], [49.2813564, -123.1012253, "<div class='g-maps-baloon'><div><img src='assets/img/map-item-1.png'></div><div><p>БЦ «Башня Федерации» 4</p><p>Пресненская наб., 12, Москва 4</p></div></div>"], [49.2811625, -123.0985032, "<div class='g-maps-baloon'><div><img src='assets/img/map-item-1.png'></div><div><p>БЦ «Башня Федерации» 5</p><p>Пресненская наб., 12, Москва 5</p></div></div>"]];

function initialize() {
  var map = new google.maps.Map(document.getElementById('mapSearch'));
  var bounds = new google.maps.LatLngBounds();
  var infowindow = new google.maps.InfoWindow();
  var image = 'assets/img/g-pin-small.png';
  for (var i in LocationData) {
    var p = LocationData[i];
    var latlng = new google.maps.LatLng(p[0], p[1]);
    bounds.extend(latlng);

    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: p[2],
      icon: {
        url: image,
        size: new google.maps.Size(23, 31),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
      }
    });

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.setContent(this.title);
      infowindow.open(map, this);
      $('.g-maps-baloon').parent().css('overflow', 'visible');
      $('.g-maps-baloon').parent().parent().css('overflow', 'visible');
      $('.g-maps-baloon').parent().parent().parent().css('overflow', 'visible');
    });
  }

  map.fitBounds(bounds);
}

google.maps.event.addDomListener(window, 'load', initialize);

initialize();
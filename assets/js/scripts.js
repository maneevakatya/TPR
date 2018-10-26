$(document).ready(function() {

$('html').css('height', '' + $('body').height() + 'px');

	$("body").on("click", ".nav a, .intro__down", function(event) {
		event.preventDefault();
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		if (($(window).width() <= 768) && (!$(this).hasClass('intro__down'))) {
			$("html, body").animate({
				scrollTop: destination
			}, 1500)
			$(".header").slideUp('slow', function() {
				$(this).css('display', '');
			});
			$(".header").toggleClass("active");
			$(".burger-menu").toggleClass("is-active");
			$("html, body").toggleClass("ovh");
		} else if (($(window).width() <= 768) && ($(this).hasClass('intro__down'))) {
			$("html, body").animate({
				scrollTop: destination
			}, 1500)
		} else {
			$("html, body").animate({
				scrollTop: destination - 91
			}, 1500)
		}
	});

	$(".burger-menu").click(function() {
		if ($(".header").hasClass("active")) {
				$("body").removeClass("ovh");
			setTimeout(function(){
				$(".header").slideToggle();
				$(".header").removeClass("active");
		}, 200);
		} else {
				$(".header").slideToggle();
				$("body").addClass("ovh");
				$(".header").addClass("active");
		}
		$(this).toggleClass("is-active");
	});


	window.sf = {};

	window.sf.form = ({

		init: function() {

			var _th = this;

			$('.js-phone').keydown(function(e) {
				if ($.inArray(e.keyCode, [
					46,
					8,
					9,
					27,
					13,
					110,
					190
				]) !== -1 || (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) || (e.keyCode >= 35 && e.keyCode <= 40)) {
					return;
				}
				if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
					e.preventDefault();
				}
			});

			$('.js-phone').inputmask("+7 (999) 999 - 99 - 99", {
				placeholder: ' ',
				showMaskOnHover: false,
				showMaskOnFocus: false
			});

			$('.feedback__form').submit(function(e) {
				if (!_th.checkForm($(this))) {
					return false;
				}
			});
		},

		checkForm: function(form) {
			var checkResult = true;
			form.find('.warning').removeClass('warning');
			form.find('input, textarea, select').each(function() {
				if ($(this).data('req')) {
					switch ($(this).data('type')) {
						case 'email':
							var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
							if (!re.test($(this).val())) {
								$(this).addClass('warning');
								checkResult = false;
							}
							break;
						case 'mobile':
							if ($.trim($(this).val()).length < 22) {
								$(this).addClass('warning');
								checkResult = false;
							}
							break;
						default:
							if ($.trim($(this).val()) === '') {
								$(this).addClass('warning');
								checkResult = false;
							}
							break;
					}
				}
			});
			return checkResult;
		}
	}).init();

	window.sf.contacts = ({

		bindEvents: function() {
			var styles = [
				{
					"featureType": "administrative",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#444444"
						}
					]
				}, {
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"color": "#f2f2f2"
						}
					]
				}, {
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				}, {
					"featureType": "poi",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"saturation": "-100"
						}, {
							"lightness": "57"
						}
					]
				}, {
					"featureType": "poi",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"lightness": "1"
						}
					]
				}, {
					"featureType": "poi",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				}, {
					"featureType": "road",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						}, {
							"lightness": 45
						}, {
							"visibility": "simplified"
						}
					]
				}, {
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				}, {
					"featureType": "road.arterial",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				}, {
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				}, {
					"featureType": "transit.station.bus",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				}, {
					"featureType": "transit.station.bus",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"saturation": "0"
						}, {
							"lightness": "0"
						}, {
							"gamma": "1.00"
						}, {
							"weight": "1"
						}
					]
				}, {
					"featureType": "transit.station.bus",
					"elementType": "labels.icon",
					"stylers": [
						{
							"saturation": "-100"
						}, {
							"weight": "1"
						}, {
							"lightness": "0"
						}
					]
				}, {
					"featureType": "transit.station.rail",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				}, {
					"featureType": "transit.station.rail",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"gamma": "1"
						}, {
							"lightness": "40"
						}
					]
				}, {
					"featureType": "transit.station.rail",
					"elementType": "labels.icon",
					"stylers": [
						{
							"saturation": "-100"
						}, {
							"lightness": "30"
						}
					]
				}, {
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"color": "#d2d2d2"
						}, {
							"visibility": "on"
						}
					]
				}
			]

			var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

			var mapOptions = {
				zoom: 17,
				scrollwheel: false,
				center: '',
				styles: styles,
				mapTypeControlOptions: {
					mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
				},
				zoomControlOptions: {
					position: google.maps.ControlPosition.LEFT_BOTTOM
				},
				streetViewControlOptions: {
					position: google.maps.ControlPosition.LEFT_BOTTOM
				}
			};

			var image = './assets/img/pin.png';
			mapOptions.center = new google.maps.LatLng(55.766273, 37.676520);
			map = new google.maps.Map(document.getElementById('contactsmap'), mapOptions);
			var start_point = new google.maps.LatLng(55.766273, 37.676520);

			var marker = new google.maps.Marker({position: start_point, map: map, icon: image});

		},

		init: function() {

			if ($('#contactsmap').length)
				this.bindEvents();
			}

	}).init();
});

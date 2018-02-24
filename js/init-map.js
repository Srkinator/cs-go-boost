$(document).ready(function($){
	// Google Map Customization
	(function(){

		var map;

		map = new GMaps({
			el: '#gmap',
			lat: 23.7555892,
			lng: 90.3673855,
			scrollwheel:false,
			zoom: 16,
			zoomControl : true,
			panControl : false,
			streetViewControl : false,
			mapTypeControl: false,
			overviewMapControl: false,
			clickable: false
		});

		var image = 'img/icon-location.svg';
		map.addMarker({
			lat: 23.7555892,
			lng: 90.3673855,
			icon: image,
			animation: google.maps.Animation.DROP,
			verticalAlign: 'bottom',
			horizontalAlign: 'center',
			backgroundColor: '#d3cfcf',
		});


		var styles = [ 

		{
			"featureType": "road",
			"stylers": [
			{ "color": "#aaaaaa" }
			]
		},{
			"featureType": "water",
			"stylers": [
			{ "color": "#99b3cc" }
			]
		},{
			"featureType": "landscape",
			"stylers": [
			{ "color": "#cccccc" }
			]
		},{
			"elementType": "labels.text.fill",
			"stylers": [
			{ "color": "#7b7b7b" }
			]
		},{
			"featureType": "poi",
			"stylers": [
			{ "color": "#c5c5c5" }
			]
		},{
			"elementType": "labels.text",
			"stylers": [
			{ "saturation": 1 },
			{ "weight": 0.1 },
			{ "color": "#ffffff" }
			]
		}

		];

		map.addStyle({
			styledMapName:"Styled Map",
			styles: styles,
			mapTypeId: "map_style"  
		});

		map.setStyle("map_style");
	}());
});
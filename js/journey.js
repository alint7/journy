var ITEMS = [
    {id: 1, title: 'Item 1 Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis sapien id lacus iaculis iaculis. Integer consectetur at turpis at bibendum. Donec eget posuere enim. Nullam fringilla, nibh ac tempus fermentum, tellus justo mollis ligula, non feugiat elit arcu sed augue.', pic: 'http://placehold.it/250x250', pos: [45.759722,21.23]},

    {id: 2, title: 'Item 2 Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis sapien id lacus iaculis iaculis. Integer consectetur at turpis at bibendum. Donec eget posuere enim. Nullam fringilla, nibh ac tempus fermentum, tellus justo mollis ligula, non feugiat elit arcu sed augue. ', pic: 'http://placehold.it/250x250', pos: [45.76417,21.208023]},

    {id: 3, title: 'Item 3 Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis sapien id lacus iaculis iaculis. Integer consectetur at turpis at bibendum. Donec eget posuere enim. Nullam fringilla, nibh ac tempus fermentum, tellus justo mollis ligula, non feugiat elit arcu sed augue. ', pic: 'http://placehold.it/250x250', pos: [45.746444,21.276344]},

    {id: 4, title: 'Item 4 Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis sapien id lacus iaculis iaculis. Integer consectetur at turpis at bibendum. Donec eget posuere enim. Nullam fringilla, nibh ac tempus fermentum, tellus justo mollis ligula, non feugiat elit arcu sed augue. ', pic: 'http://placehold.it/250x250', pos: [45.734463,21.20768]},

    {id: 5, title: 'Item 5 Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis sapien id lacus iaculis iaculis. Integer consectetur at turpis at bibendum. Donec eget posuere enim. Nullam fringilla, nibh ac tempus fermentum, tellus justo mollis ligula, non feugiat elit arcu sed augue. ', pic: 'http://placehold.it/250x250', pos: [45.773749,21.216949]}

];

$(window).load(function(){

    var myLatlng = new google.maps.LatLng(45.759722,21.23);
    var mapOptions = {
        zoom: 14,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    setMarkers(map, ITEMS);

});

function setMarkers(map, locations) {

    var bounds = new google.maps.LatLngBounds();
    var infowindow = null;
    var contentString = '';

        infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 250
    });

    for (var i = 0; i < locations.length; i++) {
        var item = locations[i];
        var myLatLng = new google.maps.LatLng(item.pos[0], item.pos[1]);

        contentString = '<div id="bubbleContent">'+
            //'<h1 id="firstHeading" class="firstHeading">' + item.title +'</h1>'+
            '<p class="img"><img src="' + item.pic + '" /></p>'+
            '<p>' + item.text + '</p>'+
            '</div>';

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: item.title,
            zIndex: i,
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
            html: contentString
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(this.html);
            infowindow.open(map,this);
        });

        bounds.extend(myLatLng);
    }
    map.fitBounds(bounds);
}


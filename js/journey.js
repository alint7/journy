var ITEMS = [

    {id: 1, title: 'Bugar\'D Pub', text: 'Bugar’D is a pub combined with live music and DJ. Offering up to 25% off for us! www.bugard.ro', pic: 'Bugard.jpg', pos: [45.75769,21.22767]},
{id: 2, title: 'El Che Club', text: 'One of the best clubs in town! 25% Off for us! https://www.facebook.com/el.che.56', pic: 'Elche.jpg', pos: [45.75681,21.22706]},
{id: 3, title: 'Erick\'s Coffee House', text: 'Not just a Coffee house, a cousy one! Check us for discounts! https://www.facebook.com/pages/Ericks/', pic: 'Ericks.jpg', pos: [45.75756,21.22807]},
    {id: 4, title: 'Jarvis Restaurant', text: 'Captain Jarvis and Friends are waiting for you! 25% Off discounts for us! www.jarvis.ro', pic: 'Jarvis.jpg', pos: [45.75834,21.22749]},
    {id: 5, title: 'Insieme Restaurant', text: 'Italian restaurant having the best pasta in town! Different menu discounts for us! www.restaurantinsieme.ro/‎', pic: 'insieme.jpg', pos: [45.75750,21.22890]},
    {id: 6, title: 'Van Graf Bar', text: 'Offering a cousy place to serve a coffee or a good party place on weekends. 25% Off for us! www.vangraph.ro', pic: 'vangraph.jpg', pos: [45.75934,21.23010]},
    {id: 7, title: 'Etnoteca de Savoya ', text: 'The original wine sellar in town! Offering discounts for wine bottles, for tastings just for us! www.enotecadesavoya.ro/', pic: 'etnoteca.jpg', pos: [45.75670,21.22879]}

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
            '<p class="img"><img src="/pics/' + item.pic + '" width="250" /></p>'+
            '<p>' + item.text + '</p>'+
            '</div>';

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: item.title,
            zIndex: i+2,
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


function initialize() {
    
    
    var latlng = new google.maps.LatLng(-26.053717, 27.962527);
    var myOptions = { zoom: 16, center: latlng, mapTypeId: google.maps.MapTypeId.ROADMAP };
    var map = new google.maps.Map(document.getElementById("streetmap"), myOptions);
    var panoramaOptions = {
        position: latlng,
        pov: {
            heading: 220,
            pitch: 0,
            zoom: 1
        }
    };

    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: 'Villa Etrucia'
    });
    
    var myStreetView = new google.maps.StreetViewPanorama(document.getElementById("streetview"), panoramaOptions);
    myStreetView.setVisible(true);
    map.setStreetView(myStreetView);

}

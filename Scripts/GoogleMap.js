  function init_map() {
    var myLocation = new google.maps.LatLng(-26.053717, 27.962527);
      
    var mapOptions = {
      center: myLocation,
      zoom: 16
    };
    
    var marker = new google.maps.Marker({
        position: myLocation,
        title:"Villa E'Trucia"});
        
    var map = new google.maps.Map(document.getElementById("map-container"),
        mapOptions);
    
    marker.setMap(map);	

  }
  
  google.maps.event.addDomListener(window, 'load', init_map);

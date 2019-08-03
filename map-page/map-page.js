var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng()
};
var map = new google.maps.Map(
    document.getElementById(
        'map-container'),
    mapOptions);
//the first marker, with everything expanded for clarity
var houseIcon = {
    /*
     Position an image to appear at the lat/long point
     For this image, the marker point is in the middle, at the bottom
    */
    anchor: new google.maps.Point(16, 37),
    /*
     Position of the image within the sprite
     In  this sprite,  the images are arranged horizontally
     so 0,0 is the start of the first image and 111,0 is the 3rd image
    */
    origin: new google.maps.Point(111, 0),
    /*Size of the sprite image*/
    size: new google.maps.Size(32, 37),
    /*url of the sprite image*/
    url: '.....'
};
var houseMarker = new google.maps.Marker({
    position: new google.maps.LatLng(51.502066, -0.140122),
    map: map,
    icon: houseIcon
});
/*and the rest of the markers (more efficiently coded)*/
var iconAnchor = new google.maps.Point(16, 37);



var iconSize = new google.maps.Size(32, 37);
var iconUrl = '......';
var birthMarker = new google.maps.Marker({
    position: new google.maps.LatLng(fill in , fill in ),
    map: map,
    icon: {
        anchor: iconAnchor,
        origin: new google.maps.Point(74, 0),
        size: iconSize,
        url: iconUrl
    }
});
var workMarker = new google.maps.Marker({
    position: new google.maps.LatLng(fill in , fill in ),
    map: map,
    icon: {
        anchor: iconAnchor,
        origin: new google.maps.Point(0, 0),
        size: iconSize,
        url: iconUrl
    }
});
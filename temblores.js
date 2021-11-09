var map = L.map('map', {
    center: [9.933333, -84.083333],
    zoom: 8
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution: ' Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var fallas= L.imageOverlay("rstFallas.png",[[11.219875, -85.950241],[8.039626, -82.552702]],{opacity: 0.4});
var subduccion= L.imageOverlay("rstSubduccion.png",[[11.219875, -85.950241],[8.039626, -82.552702]],{opacity: 0.4});
var gaso= L.geoJson(gasolineras);
var schools= L.geoJson(escuelas);

var overlays= {
    "Fallas": fallas,
    "Subduccion":subduccion
};


var datos= {
    "Gasolineras":gaso,
    "Escuelas": schools
};


L.control.layers(overlays, datos).addTo(map);


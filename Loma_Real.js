let map=L.map("map").setView([9.953702,-84.169296],18)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

function popup(feature, layer){
    if(feature.properties && feature.properties.Lote){
        layer.bindPopup("<strong>Lote: </strong>"+ feature.properties.Lote);
    } 
}

function popup2(feature, layer){
    if(feature.properties && feature.properties.name){
        layer.bindPopup("<strong>Nombre: </strong>"+ feature.properties.name);
    } 
}

L.geoJson(lotes).addTo(map);
L.geoJson(area).addTo(map);
L.geoJson(puntos).addTo(map);

var lotesJS= L.geoJson(lotes,{onEachFeature: popup}).addTo(map);
var puntosJS= L.geoJson(puntos,{onEachFeature: popup2}).addTo(map);
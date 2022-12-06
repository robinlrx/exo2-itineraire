import * as Leaflet from 'leaflet';

console.log('Hello World! You did it! Welcome to Snowpack :D');

// init map
const map = Leaflet.map('map').setView([48.852969, 2.349903], 14.5); // setView([long, lat], zoom);

Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// add RDV markers
const rdvIcon = Leaflet.icon({
	iconUrl: "https://cdn1.iconfinder.com/data/icons/color-bold-style/21/14_2-512.png",
	iconSize: [40, 40],
	iconAnchor: [25, 50],
	popupAnchor: [-3, -76],
});

let rdvMarker= Leaflet.marker([48.852969, 2.349903], { 
	icon: rdvIcon,
	draggable: true,
	autoPan: true
}).addTo(map)

// create restaurants objects
let restaurants = {
	"Restaurant 1 (Sorbone)": { "lat": 48.8510502823, "lon": 2.3442733454214 },
	"Restaurant 2 (Hotel de ville)": { "lat": 48.856389, "lon": 2.352222 },
	"Restaurant 3 (Pont)": { "lat": 48.85277, "lon": 2.3575 },
};

// add markers for restaurants
const restaurantIcon = Leaflet.icon({
	iconUrl: "https://cdn-icons-png.flaticon.com/512/3448/3448610.png",
	iconSize: [40, 40],
	iconAnchor: [25, 50],
	popupAnchor: [-3, -76],
});

for (const restaurant in restaurants) {
	let restaurantMarker = Leaflet.marker([restaurants[restaurant].lat, restaurants[restaurant].lon], { icon: restaurantIcon }).addTo(map);
}


// create restaurants objects
let persons = {
	"Nico": { "lat": 48.8527749863, "lon": 2.3353216052055 },
	"Alex": { "lat": 48.858519522442, "lon": 2.3471194010479 },
	"Chachat": { "lat": 48.8593, "lon": 2.3561 },
};

// add markers for person
const personIcon = Leaflet.icon({
	iconUrl: "https://www.asso-aep.org/wp-content/uploads/2018/06/marker_jaune.png",
	iconSize: [40, 40],
	iconAnchor: [25, 50],
	popupAnchor: [-3, -76],
});

for (const person in persons) {
	let personMarker = Leaflet.marker([persons[person].lat, persons[person].lon], { icon: personIcon }).addTo(map);
}

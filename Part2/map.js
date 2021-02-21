let centerCoordinates = [39.8097, -98.5556];
let zoomLevel = 4;

let map = L.map("college-map").setView(centerCoordinates, zoomLevel);

//the map background
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// ICON
var LeafIcon = L.Icon.extend({
  options: {
    shadowUrl: "bridgeIcon.png",
    iconSize: [35, 50],
    shadowSize: [0, 0],
    iconAnchor: [22, 24],
    shadowAnchor: [4, -62],
    popupAnchor: [3, 6],
  },
});
var bridgeIcon = new LeafIcon({ iconUrl: "bridgeIcon.png" });
//bridge object
bridges = [
  {
    name: "Verrazano-Narrows Bridge",
    state_city: "New York,NY",
    Meters: 1298.4,
    location: [40.6066, -74.0447],
  },
  {
    name: "Golden Gate Bridge",
    state_city: "San Francisco and Marin, CA",
    Meters: 1280.2,
    location: [37.8199, -122.4783],
  },
  {
    name: "Mackinac Bridge",
    state_city: "Mackinaw and St Ignace, MI",
    Meters: 1158.0,
    location: [45.8174, -84.7278],
  },
  {
    name: "George Washington Bridge",
    state_city: "New York, NY and New Jersey, NJ",
    Meters: 1067.0,
    location: [40.8517, -73.9527],
  },
  {
    name: "Tacoma Narrows Bridge",
    state_city: "Tacoma and Kitsap, WA",
    Meters: 853.44,
    location: [47.269, -122.5517],
  },
];
//loop through bridge object to locate bridge coordination,meters,name
bridges.forEach(function (el) {
  let coordinates = el.location;
  let bridgeMarker = L.marker(coordinates, { icon: bridgeIcon }) //add brindge icon
    .bindPopup(`${el.name}<br>${el.Meters}m<br><a href=''>Website</a>`) //popUp the meters and website link
    .addTo(map);
  return bridgeMarker;
});

// ****BRIDGE CHART****//
//set canvas
let canvas = document.getElementById("bridge-chart");
let ctx = canvas.getContext("2d");
//create chart object
let chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [], //add bridge function will update data
    datasets: [
      {
        label: "US Bridges Chart",
        data: [], //add bridge function will update data
        backgroundColor: [
          "#26C6DA",
          "#FF5722",
          "#ffff00",
          "#005005",
          "#a30000",
        ],
      },
    ],
  },
});

//Add bridge data
function addData() {
  for (let el of bridges) {
    chart.data.labels.push(el.name);
    chart.data.datasets[0].data.push(el.Meters);

    chart.update();
  }
}
addData();

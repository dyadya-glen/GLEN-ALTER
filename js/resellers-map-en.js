var markersData = [
  {
    lat: 55.0890551,
    lng: 38.9171866,
    name: "Aerograd “Kolomna”",
    address:"Russia, Moscow,</br>Phone: +7(495)790-15-11"
  },
  {
    lat: 55.857485,
    lng: 37.6515717,
    name: "R8",
    address:"R8 skydiving equipment</br>Russia, Moscow,</br>Phone: +7(910)407-58-38</br>E-mail: r8sport@mail.ru</br>Skype: r8.skype"
  },
  {
    lat: 55.754056673721145,
    lng: 37.62026090690574,
    name: "Sky People",
    address:"sky-people.su</br>Russia, Moscow,</br>Phone: +7(916)503-16-81</br>Email: order@sky-people.su"
  },
  {
    lat: 59.935028925136386,
    lng: 30.329456068352826,
    name: "Parashop",
    address:"Russia,</br>Moscow, Saint Petersburg</br>www.parashop.ru/aboutus.html</br>E-mail: sales@parashop.ru</br>Phone:</br>+7(915)199-99-28</br>+7(916)794-00-80"
  },
  {
    lat: 45.018623213484915,
    lng: 38.98745510704887,
    name: "Sergey Nazarov",
    address:"Russia, Krasnodar</br>Phone:</br>+7 987 406 82 96</br>+7 918 274 43 17</br>E-mail: freefly1316@yandex.ru"
  },
  {
    lat: 41.89487229083072,
    lng: 12.48542759545207,
    name: "Sixty Seconds",
    address:"All4fun</br>sixtyseconds.it</br>Esu via Nazionale 145</br>Decimomannu (CA) p.i.</br>03570360929 - c.f.: SEUFNC75C48B354B</br>+393293161236\</br>Email: info@sixtyseconds.it"
  },
  {
    lat: 25.774806,
    lng: -80.197726,
    name: "",
    address:"USA,</br>Miami,</br>Майами</br>Email: matias@13k1.com"
  },
  {
    lat: 35.539342,
    lng: -79.185405,
    name: "",
    address:"USA,</br>North Carolina</br>Email: manager@triangleskydiving.com"
  },
  {
    lat: -43.947635,
    lng: 170.502864,
    name: "",
    address:"New Zeland</br>Email: chris@skysupplies.co.nz"
  },
  {
    lat: -10.777534,
    lng: -53.067526,
    name: "",
    address:"Brasil</br>Email: th_pilot@hotmail.com"
  },
  {
    lat: -29.002204,
    lng: 25.080298,
    name: "",
    address:"South Africa</br>www.chutemeshop.com</br>Email: luke@chutemeshop.com"
  },
  {
    lat: 25.269516,
    lng: 55.308823,
    name: "Dubai",
    address:"UAE,</br>Dubai</br>Email: hani.almolani@gmail.com"
  },
  {
    lat: -8.355001,
    lng: 115.115880,
    name: "Bali",
    address:"Indonesia,</br>Bali</br>Email: shakuto@gmail.com</br>Телефон:  +62(813)38-28-65-60"
  }
];
var map, infoWindow;
function initMap() {
  var centerLatLng = new google.maps.LatLng(40.806900,30);
  var mapOptions1 = {
      center: centerLatLng,
      scrollwheel: false,
  };
  map = new google.maps.Map(document.getElementById("resellersMap1"), mapOptions1);
  infoWindow = new google.maps.InfoWindow();
  google.maps.event.addListener(map, "click", function() {
      infoWindow.close();
  });
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < markersData.length; i++){
      var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var name = markersData[i].name;
      var address = markersData[i].address;
      addMarker(latLng, name, address);
      bounds.extend(latLng);
  }
      map.fitBounds(bounds);
}
google.maps.event.addDomListener(window, "load", initMap);
function addMarker(latLng, name, address) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: name
    });
    google.maps.event.addListener(marker, "click", function() {
        var contentString = '<div class="infowindow">' +
                                '<h3>' + name + '</h3>' +
                                '<p>' + address + '</p>' +
                            '</div>';
        infoWindow.setContent(contentString);
        infoWindow.open(map, marker);
    });
}

var markersData = [
  {
    lat: 55.0890551,    // Широта
    lng: 38.9171866,     // Долгота
    name: "Аэроград Коломна", // Произвольное название, которое будем выводить в информационном окне
    address:"Россия, Московская область,</br>Коломенский район, Аэроград Коломна</br>Телефон: +7 (495) 790-15-11"   // Адрес, который также будем выводить в информационном окне
  },
  {
    lat: 55.857485,     // Широта
    lng: 37.6515717,    // Долгота
    name: "R8", // Произвольное название, которое будем выводить в информационном окне
    address:"R8 skydiving equipment</br>129329, Москва, Кольская ул., дом 1, офис №119</br>Телефон: +79104075838, +79636222282</br>E-mail: r8sport@mail.ru</br>Skype: r8.skype"   // Адрес, который также будем выводить в информационном окне
  },
  {
    lat: 55.754056673721145,     // Широта
    lng: 37.62026090690574,    // Долгота
    name: "Sky People", // Произвольное название, которое будем выводить в информационном окне
    address:"sky-people.su</br>Телефон: +7 (916) 503-16-81</br>Email: order@sky-people.su"   // Адрес, который также будем выводить в информационном окне
  },
  {
    lat: 59.935028925136386,     // Широта
    lng: 30.329456068352826,    // Долгота
    name: "Parashop", // Произвольное название, которое будем выводить в информационном окне
    address:"www.parashop.ru/aboutus.html</br>E-mail: sales@parashop.ru</br>Телефоны:</br>+7(915)199-99-28</br>+7(916)794-00-80"   // Адрес, который также будем выводить в информационном окне
  },
  {
    lat: 45.018623213484915,     // Широта
    lng: 38.98745510704887,    // Долгота
    name: "Сергей Назаров", // Произвольное название, которое будем выводить в информационном окне
    address:"Сергей Назаров</br>Телефоны:</br>+7 987 406 82 96</br>+7 918 274 43 17</br>E-mail: freefly1316@yandex.ru"   // Адрес, который также будем выводить в информационном окне
  },
  {
    lat: 41.89487229083072,     // Широта
    lng: 12.48542759545207,    // Долгота
    name: "Sixty Seconds", // Произвольное название, которое будем выводить в информационном окне
    address:"All4fun</br>sixtyseconds.it</br>Esu via Nazionale 145</br>Decimomannu (CA) p.i.</br>03570360929 - c.f.: SEUFNC75C48B354B</br>+393293161236\</br>Email: info@sixtyseconds.it"   // Адрес, который также будем выводить в информационном окне
  },
  {
    lat: 25.774806,     // Широта
    lng: -80.197726,    // Долгота
    name: "", // Произвольное название, которое будем выводить в информационном окне
    address:"Соединённые Штаты Америки,</br>Флорида, Майами-Дейд,</br>Майами</br>Email: matias@13k1.com"   // Адрес, который также будем выводить в информационном окне
  },
  {
    lat: 35.539342,     // Широта
    lng: -79.185405,    // Долгота
    name: "", // Произвольное название, которое будем выводить в информационном окне
    address:"Соединённые Штаты Америки,</br>Северная Каролина</br>Email: manager@triangleskydiving.com"   // Адрес, который также будем выводить в информационном окне
  },
  {
    lat: -43.947635,     // Широта
    lng: 170.502864,    // Долгота
    name: "", // Произвольное название, которое будем выводить в информационном окне
    address:"Новая Зеландия</br>Email: chris@skysupplies.co.nz"   // Адрес, который также будем выводить в информационном окне
  },
  {
    lat: -10.777534,     // Широта
    lng: -53.067526,    // Долгота
    name: "", // Произвольное название, которое будем выводить в информационном окне
    address:"Бразилия</br>Email: th_pilot@hotmail.com"   // Адрес, который также будем выводить в информационном окне
  },
  {
    lat: -29.002204,     // Широта
    lng: 25.080298,    // Долгота
    name: "", // Произвольное название, которое будем выводить в информационном окне
    address:"Южная Африка</br>www.chutemeshop.com</br>Email: luke@chutemeshop.com"   // Адрес, который также будем выводить в информационном окне
  },
  {
    lat: 25.269516,     // Широта
    lng: 55.308823,    // Долгота
    name: "Дубай", // Произвольное название, которое будем выводить в информационном окне
    address:"Объединённые Арабские Эмираты,</br>Дубай</br>Email: hani.almolani@gmail.com"   // Адрес, который также будем выводить в информационном окне
  },
  {
    lat: -8.355001,     // Широта
    lng: 115.115880,    // Долгота
    name: "Бали", // Произвольное название, которое будем выводить в информационном окне
    address:"Индонезия,</br>Бали</br>Email: shakuto@gmail.com</br>Телефон:  +62(813)38-28-65-60"   // Адрес, который также будем выводить в информационном окне
  }
];

var map, infoWindow;

function initMap() {
  var centerLatLng = new google.maps.LatLng(40.806900,30);
  var mapOptions1 = {
      center: centerLatLng,
      scrollwheel: false,
      //maxZoom: 10
  };

  // var mapOptions2 = {
  //     center: centerLatLng,
  //     scrollwheel: false,
  //     zoom: 1
  // };
  //
  // var mapOptions3 = {
  //     center: centerLatLng,
  //     scrollwheel: false,
  //     zoom: 0
  // };
  //var positionMarker = new google.maps.LatLng(55.806499, 37.587656);
  map = new google.maps.Map(document.getElementById("resellersMap1"), mapOptions1);
  // var map2 = new google.maps.Map(document.getElementById("resellersMap2"), mapOptions2);
  // var map3 = new google.maps.Map(document.getElementById("resellersMap3"), mapOptions3);

  infoWindow = new google.maps.InfoWindow();

  google.maps.event.addListener(map, "click", function() {
      // infoWindow.close - закрываем информационное окно.
      infoWindow.close();
  });

  // Определяем границы видимой области карты в соответствии с положением маркеров
  var bounds = new google.maps.LatLngBounds();

  for (var i = 0; i < markersData.length; i++){

      var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var name = markersData[i].name;
      var address = markersData[i].address;

      // Добавляем маркер с информационным окном
      addMarker(latLng, name, address);

      // Расширяем границы нашей видимой области, добавив координаты нашего текущего маркера
      bounds.extend(latLng);
  }

  // Автоматически масштабируем карту так, чтобы все маркеры были в видимой области карты
      map.fitBounds(bounds);
  // var imageMarker = "../img/icons/icon-map-marker.svg";
  // var beanchMarker1 = new google.maps.Marker({
  //   position: positionMarker,
  //   map: map1,
  //   title: "Офис ООО “Альтер”",
  //   // icon: imageMarker
  // });
  //
  // var beanchMarker2 = new google.maps.Marker({
  //   position: positionMarker,
  //   map: map2,
  //   title: "Офис ООО “Альтер”",
  //   // icon: imageMarker
  // });
  //
  // var beanchMarker1 = new google.maps.Marker({
  //   position: positionMarker,
  //   map: map3,
  //   title: "Офис ООО “Альтер”",
  //   // icon: imageMarker
  // });
}
google.maps.event.addDomListener(window, "load", initMap);

// Функция добавления маркера с информационным окном
function addMarker(latLng, name, address) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: name
    });

    // Отслеживаем клик по нашему маркеру
    google.maps.event.addListener(marker, "click", function() {

        // contentString - это переменная в которой хранится содержимое информационного окна.
        var contentString = '<div class="infowindow">' +
                                '<h3>' + name + '</h3>' +
                                '<p>' + address + '</p>' +
                            '</div>';

        // Меняем содержимое информационного окна
        infoWindow.setContent(contentString);

        // Показываем информационное окно
        infoWindow.open(map, marker);

    });
}

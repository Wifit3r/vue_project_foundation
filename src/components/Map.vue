<template>
  <div>
    <div id="map" class="map"></div>
    <div class="card-container-map">
      <CardVue :title="title" :text="text" />
    </div>
  </div>
</template>


<script>
/* eslint-disable */

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-arrowheads';
import CardVue from './Card.vue';

export default {
  name: 'MapComponent',
  mounted() {
    this.initMap();
  },
  data(){
    return{
      title:"Опис нашої роботи",
      text:"Наш фонд здійснює поїздки до Краматорська та Херсона, щоб доставити допомогу жителям, які найбільше цього потребують. Ми забезпечуємо їх продуктами харчування, медикаментами, одягом та іншими необхідними речами. Наша команда працює невпинно, щоб доставити найнеобхідніше в ці регіони, постраждалі від конфліктів і стихійних лих. Ми віримо, що допомагаючи один одному, ми можемо зробити світ кращим. Кожен ваш внесок, будь то час, ресурси або фінансова підтримка, робить велику різницю для тих, хто зараз у скруті."
    }
  },    
  components:{
    CardVue
  },
  methods: {
    initMap() {
      const map = L.map('map').setView([49.49396897116921, 30.57332063147501], 5);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      const pointA = [48.4470913103504, 23.260678653135297];
      const pointB = [48.73768229198784, 37.584858913661115];
      
      const pointB1 = [46.63540028127373, 32.618764313865526];

      const markerA = L.marker(pointA).addTo(map).bindPopup('Закарпаття');
      const markerB = L.marker(pointB).addTo(map).bindPopup('Краматорськ');
      const markerB1 = L.marker(pointB1).addTo(map).bindPopup('Херсон');

      const polyline = L.polyline([pointA, pointB], { color: 'orange' }).addTo(map);
      const polyline1 = L.polyline([pointA, pointB1], { color: 'red' }).addTo(map)

    }
  }
};
</script>

<style>
#map {
  height: 500px;
  width: 60vw;
  margin-left: 20vw;
  z-index: -1;
}
.leaflet-arrowheads-path {
  stroke-width: 1;
  fill: #000;
}
.map{
  margin-top: 60px;
  padding: 20px;
  background-color: #666;
  z-index: -1;
}
.card-container-map {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}

</style>

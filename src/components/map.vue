<template>
    <div id="qgcmap" class="qgcmap"></div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {tiandituTileLayer} from '@supermap/iclient-leaflet/dist/iclient9-leaflet.js';
import '@supermap/iclient-leaflet/dist/iclient9-leaflet.css';
import  mapUtil from '../utils/mapUtil'
export default {
  name: 'gisMap',
  data () {
    return {
      msg: ''
    }
  },
  mounted: ()=>{


    mapUtil.createMap('qgcmap');
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.qgcmap{
  width: 100%;
  height: 700px;  
}
</style>

<template>
  <div class="Map">
    <div id='leaflet-map'></div>
    <div id='popup-map'>
      <slot name='popup'>
        default content of the popup
      </slot>
    </div>
  </div>
</template>

<script src='./index.js'></script>

<style scoped>
.Map {
  position: relative;
}
#leaflet-map {
  height: calc(100vh - 48px - 36px);
}
#popup-map {
  z-index: 10000;
  width: 300px;
  border: 1px solid grey;
  position: absolute;
  background-color: white;
  padding: 1rem;
  border-radius: 2px;
  top: 1rem;
  left: 1rem;
}
</style>

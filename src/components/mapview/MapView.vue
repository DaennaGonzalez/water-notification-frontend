<template>
    <div v-if="!isUserLocationReady" 
        class="row justify-content-md-center">
        <div class="col-3 alert-info text-center mt-5">
            Espere por favor...
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
            </h3>
        </div>
    </div>

    <div v-show="isUserLocationReady" class="d-flex">           
        <div class="map-container" ref="mapElement">

        </div>
    </div>
</template>
<script lang="js" src="./MapView.js"/>
<style scoped>

.map-container{
    position: fixed;
    width: 100vw;
    height: 90vh;
    background-color: aliceblue;
}
</style>
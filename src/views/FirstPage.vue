<template>
    <div class="FirstPage">
        <MapContainer></MapContainer>
    </div>
</template>
<script>
import MapContainer from './MapContainer.vue';
export default {
    name: "FirstPage",
    components: {
        MapContainer
    }
    
}
</script>
<style scoped>
.FirstPage {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
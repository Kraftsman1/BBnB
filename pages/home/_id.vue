<template>
    <div>
        <div style="display: flex;">
            <img v-for="image in home.images" :key="image" alt="image description" :src="image" width="200px"
                height="150px" />
        </div>
        {{ home.title }} <br />
        ${{ home.pricePerNight }} / night <br />
        <img src="/images/marker.svg" width="10" height="20" /> {{ home.location.address }} {{ home.location.city }} {{
        home.location.state }} {{ home.location.country }} <br />
        <img src="/images/star.svg" width="20" height="20" /> {{ home.reviewValue }} <br />
        {{ home.guests }} guests , {{ home.bedrooms }} rooms, {{ home.beds}} beds, {{ home.bathrooms }} bath<br />
        {{ home.description }} <br />
        <div style="height: 800px; width: 800px;" ref="map"></div>
    </div>
</template>

<script>

export default {

    head() {
        return {
            title: this.home.title,
        }
    },
    
    methods: {
        
    },

    mounted() {
        this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng)
    },

    async asyncData({ params, $dataApi }) {
        const home = await $dataApi.getHome(params.id)

        console.log(home)

        return {
            home,
        }
    }

}

</script>
export default function (context, inject) {

    let mapLoaded = false
    let mapWaiting = false

    addScript()

    inject('maps', {
        showMap
    })

    function addScript() {

        const script = document.createElement('script')
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAlnRWuqrkL5sIa1ybTTe9bOGVIzdKeRs0&libraries=places&callback=initMap"
        script.async = true
        window.initMap = initMap
        document.head.appendChild(script)

    }
    
    function initMap() {
        mapLoaded = true
        if (mapWaiting) {
            const { canvas, lat, lng } = mapWaiting
            renderMap(canvas, lat, lng)
            mapWaiting = null
        }
    }

    function showMap(canvas, lat, lng) {
        if (mapLoaded) renderMap(canvas, lat, lng)
        else mapWaiting = { canvas, lat, lng}
    }

    function renderMap(canvas, lat, lng) {

        const mapOptions = {
            center: new window.google.maps.LatLng(lat, lng),
            zoom: 18,
            disableDefaultUI: true,
            zommControl: true,
        }

        const map = new window.google.maps.Map(canvas, mapOptions)
        const position = new window.google.maps.LatLng(lat, lng)
        const marker = new window.google.maps.Marker({ position })
        marker.setMap(map)

    }
}

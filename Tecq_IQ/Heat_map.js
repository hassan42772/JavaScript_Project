
    var map;

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -15.387526, lng: 28.322817 }, // Example coordinates of Lusaka
            zoom: 13
        });

        // Add markers for different locations
        var markers = {
            lusaka: new google.maps.Marker({ position: { lat: -15.387526, lng: 28.322817 }, map: map }),
            nairobi: new google.maps.Marker({ position: { lat: -1.286389, lng: 36.817223 }, map: map }),
            kigali: new google.maps.Marker({ position: { lat: -1.9536, lng: 30.0606 }, map: map }),
            accra: new google.maps.Marker({ position: { lat: 5.6037, lng: -0.186964 }, map: map }),
            // Add more markers for other locations as needed
        };

        // Function to update map marker based on selected location
        function updateMap() {
            var selectedLocation = document.getElementById("location-select").value;
            var marker = markers[selectedLocation];
            if (marker) {
                map.setCenter(marker.getPosition());
            }
        }

        // Event listener for location select change
        document.getElementById("location-select").addEventListener("change", updateMap);
    }


// sidebar
function showSidebar() {
    document.querySelector('#sidebar').style.display =
        (document.querySelector('#sidebar').style.display == 'none') ? 'block' : 'none';

}
// 

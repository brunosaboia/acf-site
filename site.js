// Website general functions
$(document).ready(function () {
    $('a[href="#institucional"]').click(function (event) {
        event.preventDefault();
        $(this).modal({
            fadeDuration: 250
        });
    });
    $('a[href="#portfolio"]').click(function (event) {
        event.preventDefault();
        $(this).modal({
            fadeDuration: 250
        });
    });
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            },
                800,
                function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        } // End if
    });
});

// Google Maps
function initMap() {
    var acfLatLong = {
        lat: -3.869016,
        lng: -38.463609
    };

    var map = new google.maps.Map(
        document.getElementById('map'), {
        zoom: 15,
        center: acfLatLong
    });

    const marker = new google.maps.Marker({
        position: acfLatLong,
        map: map,
        title: 'ACF Indústria de Artefatos Metálicos'
    });
}
$(document).ready(()=>{
    var detailsCol = $("#detailsCol")


    $(".activity-button").on("click", event => {
        event.preventDefault();
        console.log($(".activity-button").data("catego"));
        console.log("hola");
        detailsCol.css("display", "block");
        $("#exampleInputEmail1").val($(".activity-button").data("catego"));


    });

    $("#exampleInputPassword1").datepicker({
        format: "dd/mm/yy",
        autoclose: true
    });

    var searchInput = 'search_input';

    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
        // types: ['establishment'],
    });
	
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var near_place = autocomplete.getPlace();
        document.getElementById('loc_lat').value = near_place.geometry.location.lat();
        document.getElementById('loc_long').value = near_place.geometry.location.lng();
		
        document.getElementById('latitude_view').innerHTML = near_place.geometry.location.lat();
        document.getElementById('longitude_view').innerHTML = near_place.geometry.location.lng();
    });

});
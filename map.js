var map;
var countryList = [];

function showCountryList() {
    document.getElementById('countrys').innerHTML = ""
    for (i = 0; i < countryList.length; i++) {
        var newCountry = countryList[i] + " <br>";
        document.getElementById('countrys').innerHTML += newCountry;
    };
}

function addToCountryList() {
    var addCountry = document.getElementById('addCountry').value;
    addCountry = "'" + addCountry + "'"
    if (addCountry.length == 2) {
        alert("There is no value");
    }
    else if (countryList.includes(addCountry)) {
        alert("This country is already in the list");
    }
    else {
        countryList.push(addCountry);
    }

}

function initMap() {
    var country_str = "ISO_2DIGIT IN ("
    if (countryList.length == 0) {
        country_str += "'')"
    }
    else {
        country_str += countryList + ")"
    }
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {
            lat: 0.0,
            lng: 0.0
        },
    });

    var world_geometry = new google.maps.FusionTablesLayer({
    query: {
            select: 'geometry',
            from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
            where: country_str
        },
        map: map,
        suppressInfoWindows: true
    });
}

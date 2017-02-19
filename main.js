
document
    .getElementsByName("source")
    .forEach(function(element) {
        var url = "https://freegeoip.net/json/" + element.value.substring(0, element.value.indexOf('/'));
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var cn = JSON.parse(xmlHttp.responseText).country_code;
                var span = document.createElement("span");
                span.innerText = cn;
                element.parentElement.appendChild(span);
            }
        }
        xmlHttp.open( "GET", url, true ); // false for synchronous request
        xmlHttp.send( null );
    }, this);

function makeCorsRequest() {
  var url = 'http://api.nytimes.com/svc/books/v2/lists/overview.json?published_date=1989-10-19&api-key=e05c4c743905e3d535f16756caf18185%3A10%3A68256801';

  var xhr = createCORSRequest('GET', "http://api.nytimes.com/svc/books/v2/lists/overview.json?published_date=1989-10-19&api-key=e05c4c743905e3d535f16756caf18185%3A10%3A68256801");
  if (!xhr) {
    alert('CORS not supported');
    return;
  }
}

$(document).ready(function(){
document.makeCorsRequest;
$.getJSON("http://api.nytimes.com/svc/books/v2/lists/overview.json?published_date=1989-10-19&api-key=e05c4c743905e3d535f16756caf18185%3A10%3A68256801", function(json) {
  console.log(json);
  $('#post').html(json);
});


/****************************************************************
function apiget("http://api.nytimes.com/svc/books/v2/lists/overview.json?published_date=1989-10-19&api-key=e05c4c743905e3d535f16756caf18185%3A10%3A68256801")
  {
      var xmlHttp = null;

      xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", "http://api.nytimes.com/svc/books/v2/lists/overview.json?published_date=1989-10-19&api-key=e05c4c743905e3d535f16756caf18185%3A10%3A68256801", false );
      xmlHttp.send( null );
      $('#post').html(xmlHttp.responseText);
  }

document.apiget;
******************************************************************/

});
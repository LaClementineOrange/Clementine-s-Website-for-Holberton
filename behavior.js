
//Event sur click : Agrandir + message -> Retrecir + autre message

document.addEventListener("DOMContentLoaded", function(event) {

  var thumbnailElement = document.getElementById("smart_thumbnail");
  
    thumbnailElement.addEventListener("click", function() {
  
  if (thumbnailElement.className == "") {
	        thumbnailElement.className = "small";
          alert("Temps de se mettre au régime !");
                 }
  else {
      alert("C'est bon les Burgers !");
      thumbnailElement.className = "";
        }
  });
  
});
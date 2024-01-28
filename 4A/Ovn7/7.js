document.addEventListener("DOMContentLoaded", function() {
    var fras = "en text fras som innehåller en massa vokaler";
  
    // Funktion för att visa vokaler
    function visaVokaler(text) {
      var vokaler = "";
  
      // Loopa genom varje tecken i texten
      for (var i = 0; i < text.length; i++) {
        var tecken = text.charAt(i).toLowerCase(); // Konvertera till gemener för jämförelse
  
        // Kontrollera om tecknet är en vokal
        if ("aeiou".includes(tecken)) {
          vokaler += tecken + " ";
        }
      }
  
      return vokaler;
    }
  
    // Hämta resultatet och visa det i div-taggen
    var resultatDiv = document.getElementById("result");
    resultatDiv.textContent = visaVokaler(fras);
  });
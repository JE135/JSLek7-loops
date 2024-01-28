// 8.js
document.addEventListener("DOMContentLoaded", function() {
    var favoritfrukter = ["äpple", "banan", "jordgubbe", "mango", "kiwi"];
  
    // Loopa igenom arrayen och logga varje frukt till konsolen och en paragraf-tag
    for (var i = 0; i < favoritfrukter.length; i++) {
      console.log(favoritfrukter[i]);
  
      var paragraph = document.createElement("p");
      paragraph.textContent = favoritfrukter[i];
      document.getElementById("frukt-result").appendChild(paragraph);
    }
});

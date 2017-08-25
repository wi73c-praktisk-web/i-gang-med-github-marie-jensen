// Fix koden 2: Fejlbeskeder array

var brugernavn = "";
var password = "";
var email = "";
var fejlbeskeder = [["Du skal udfylde brugernavn feltet"],["Du skal udfylde password feltet"],["Du skal udfylde email feltet"]]

fejlbeskeder.forEach(function(element) {
    element.forEach(function(item) {
        brugernavn += item + "\n"
    });
});

console.log(fejlbeskeder);
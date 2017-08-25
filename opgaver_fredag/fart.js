// Øvelse med Fartbøde
var fart = 50;
var koerhastighed = 90;

var hastighedvejarb = 0;
var koerhastighedvejarb = 0;

var resultat = fart/(koerhastighed/100*koerhastighed/100)
var vejarbejde = hastighedvejarb/(koerhastighedvejarb/100*koerhastighedvejarb/100)

function personbil(){

if(resultat >= 70 || vejarbejde >=70){
    console.log("Bødetakst på 1500 kr");
    console.log("Bødetakst på 2000 kr ved vejarbejde");
} else if (resultat <= 90){
    console.log("Bødetakst på 3000 kr");
    console.log("Bødetakst på 4000 kr ved vejarbejde");
}
}

personbil();
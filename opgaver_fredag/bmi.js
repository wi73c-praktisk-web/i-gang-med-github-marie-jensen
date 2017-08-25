
// Øvelse om BMI

var hojde= 180;
var vogt = 60;
var resultat = vogt/(hojde/100*hojde/100)
function bmi(){

if(resultat <= 18.5){
    console.log("du er undervægtig");
} else if (resultat <= 24.9){
    console.log("du er normalvægtig");
} else if (resultat <= 29.9){
    console.log("du er overvægtig");
} else if (resultat <= 39.9){
    console.log("du er fed");
} else if (resultat >= 40){
    console.log("du er meget fed");
}}

bmi();

//______________________________________________________







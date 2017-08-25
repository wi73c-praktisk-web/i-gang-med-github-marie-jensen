// Callbacks i JavaScript

// tænk på dette som den primære funktion der kaldes fra vores kode
function doSomething(someValue, callback){
    callback(someValue);
 }
 // denne funktion vil blive udført som en callback FRA doSomething funktionen
 function outputSomething(value){
    console.log(value);
 }
//funktionen outputSomething kan kaldes uafhængigt af andre funktioner, mens doSomething skal have en funktion sendt med som argument.
 doSomething('text', outputSomething);

 //____________________________________________________________________

 // Øvelse 1
function modtag_værdi(værdien){
    console.log(værdien);
}

var data = [1,2,3,4,5,6,7,8,9];

data.forEach(modtag_værdi);
 
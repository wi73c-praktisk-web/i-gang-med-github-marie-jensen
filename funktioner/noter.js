// Simpel function uden argumenter og returværdi

hello(); // Udskriver "hello marie...
function hello() {
    console.log("hello marie...");
}

//________________________________________________________________

// Hoisting - funktionen kan kaldes før den er deklareret
// Funktionen kaldes med én værdi og modtages i ét argument
sayHello('Anne');  // Udskriver "hello Anne"
sayHello('Ida');  // Udskriver "hello Ida"
sayHello('Mikkel');  // Udskriver "hello Mikkel"

function sayHello(who) { // who er et argument
    console.log('hello', who);
}

sayHello('Marie'); // Udskriver "hello Marie"
sayHello('Jonas'); // Udskriver "hello Jonas"

//________________________________________________________________

// Hvis funktionen tildeles en variabel er der ingen hoisting

var sigHello = function sigHello(value) {
    console.log(value);
}
sigHello('hej med dig'); 

//________________________________________________________________
// Anonym funktion
var sayHeyAnonym = function (value) {
    console.log(value); // Udskriver "test af anonym function"
}

sayHeyAnonym('test af anonym funktion');

// The arrow function expression (=>)
var sayHeyAnonym = value => console.log(value); 

sayHeyAnonym('test af anonym funktion');

//___________________________________________________________________

// Arguments og default-values

function add(x = 0, y = 0) {
    console.log(`x er lig med ${x} og y=${y}. Sum: `, x + y);
}
 
add(); //Udskriver "x er lig med 0 og y=0. Sum:  0"
add(3, 8); //Udskriver "x er lig med 3 og y=8. Sum:  11"
// Funktioner Øvelser 

// Øvelse 1 __________________________________________________________________________________________

// A. Udskriv profil

function mig(fornavn, efternavn, fodselsdag) { 
    console.log(fornavn, efternavn, fodselsdag);
}

mig('Marie', 'Jensen', '10 november 1992'); 



// B. Regnefunktioner

var resultat;
function plus(tal1, tal2) {
    resultat = tal1 += tal2;
    console.log(resultat);

}

plus(5, 10);

//________________________________________

var resultat;
function minus(tal3, tal4) {
    resultat = tal3 -= tal4;
    console.log(resultat);
}

minus(8, 4);

//________________________________________

var resultat;
function ganger(tal5, tal6) {
    resultat = tal5 *= tal6;
    console.log(resultat);  
}

ganger(7, 7);

//________________________________________

var resultat;
function dividerer(tal7, tal8) {
    resultat = tal7 /= tal8;
    console.log(resultat);      
}

dividerer(20, 5);

//________________________________________

var resultat;
function pi(tal9){
    resultat = Math.PI += tal9;
    console.log(resultat);
}

pi(30);

//________________________________________________________________

// Anonyme funktioner

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


// Øvelse 2 __________________________________________________________________________________________

//Javascript-function du kan bruge til at afkorte en streng
var tekst = "Hej med dig Jeg hedder Marie";
var afkort = tekst.slice(0,10);
function streng(){
    console.log(afkort);
}

streng();


//Javascript-function du kan bruge til at afkorte en streng
var langtekst = "Hej med dig Jeg hedder Marie og jeg er 24 år gammel";

function afkortt(tekst){
    return tekst.substr(5, 10);
}
 console.log(afkortt(langtekst));

//___________________________________________________________________

// Array som argument

// Argumenter kan være af typen array


// Profil med en person

var profil = function (p) {
    return p[0] + " " + p[1] + ": Født " + p[2]; // Returnerer tekst-strengen "Peter Pedal: Født 1941"
}

var idol = ["Peter", "Pedal", 1941];

console.log(profil(idol)); // Udskriver "Peter Pedal: Født 1941"
//_________________________________________________________________

// Profilopgaven

var profilopgave = function (p, id = -1) {
    var profil = "";
    if (id === -1) {
        profil = "alle profiler\n";
        p.forEach(function (element, index) {
          element.forEach(function (item) {
                profil += `${item} `;
            });
            profil += "\n";
        });
    }
    else {
        profil = "\nEn profil\n";
        p[id].forEach(function (element, index) {
            profil += element + ' ';
        });
    }
    return profil
}

var personliste = [["Jens", "Hansen", 1970], ["Tina", "Jensen", 1982]];

console.log(profilopgave(personliste));
console.log(profilopgave(personliste, 1));


// Øvelse 3 __________________________________________________________________________________________ 

// Argumenter kan være af typen array

// Profil med en person 

var profil = function (p) {
    return p[0] + " " + p[1] + ":\nFødt " + p[2] +" og jeg er " + p[3] + " år gammel"; // Returnerer tekst-strengen  "Marie Jensen: Født 1992"
}
var dato = new Date();
var fodselsdag = new Date("11/10/92");
var mig = ["Marie", "Jensen", "1992", dato.getFullYear() - fodselsdag.getFullYear()];


console.log(profil(mig)); // Udskriver "Marie Jensen: Født 1992 og er 25 år gammel"

// _________________________________________________________________________________________________

// Profiler med flere personer

var tekst = " " ; 
var profiler = [["Peter", "Pedal", 1941],["Marie", "Jensen", 1992],["Ida", "Hansen", 1994]]

profiler.forEach(function(element) {
    element.forEach(function(item) {
        tekst += item + "\n"
    });
});

console.log(tekst);

//_____________________________________________________________________________

// Funktioner i funktioner

// closure - function i function

let eurokurs = function (kurs) {
    return function (kroner) {
        return kroner / kurs;
    }
}

let omregning = eurokurs(7.51); // let er istedet for var
console.log('kr.', omregning(100).toFixed(2)); // omregner 100 kr og resultatet er med 2 dicimaler
console.log('kr.', omregning(500).toFixed(2));



// Øvelse 4 __________________________________________________________________________________________

// Flere funktioner i samme funktion
// Her er en funktion som hedder calculator som indeholder 6 funktioner  

function calculator() {
    var result = 0;
    return {
        add: function (x) {
            result += x;
        },
        sub: function (x) {
            result -= x;
        },
        multiply: function (x) {
            result *= x;
        },
        dividerer: function (x) {
            result /= x;
        },
        pi: function () {
            result = Math.PI* result;
        },
        result: function () {
            return result;
        }
    }
}

var calc = calculator(); // en variabel som hedder calc som indeholder funktionen calculator
calc.add(4); //plus med 4
calc.sub(2); // minus med 2
calc.multiply(20); // ganger med 20
calc.dividerer(5); //dividerer med 5
calc.pi(); //tager pi af tallet
console.log(calc.result().toFixed(2)); // med toFived får jeg resultatet med 2 decimaltal
# i-gang-med-github-marie-jensen

## Forklaring på hvordan man laver en repository

*Sådan gør du:*
* Du logger ind på Github
* Derefter trykker du på + (New repository)
* Derefter vælger du hvem owner er, fx om det skal være Marie Jensen eller holdet/klassen
* Derefter vælger du om det skal være private eller public
* Ret derefter add.gitignore fra none til node
* Tilsidst tryk create repository




## Defination af console.log


_Hvad er console.log?_

**Console.log viser koden i konsolen**

*Du kan f.eks bruge det til:*
* At finde fejl
* For at teste at det virker som det skal

*Læs mere på:*
  

[Link til w3schools](http://w3schools.com)

```javascript
function SejAlert() {
  alert('Dette er en alert boks');
  }
}

console.log('Hejsa');
```

## Forklaring på if-else sætninger

Man bruger en if-else sætning hvis man vil have en betingelse i sin kode.
Den kode som står i betingelsen bliver kun udført hvis betingelsen er opfyldt.
Med else kan man udføre noget andet kode hvis if-sætningen ikke er sand. 
 
Et eksempel:

      HVIS betingelse 
         kommando 1
      ELLERS
         kommando 2
      SLUT
Dette betyder at hvis en given betingelse er opfyldt skal kommando 1 udføres 
ellers (hvis betingelsen ikke er opfyldt) skal kommando 2 udføres. 
På intet tidspunkt vil både kommando 1 og 2 blive udført.


 *eksempel på en if-else sætning:* 
 

```javascript
 if (true) {

   console.log('kodeblokken udføres');
}
else {
   console.log('kodeblokken springes over');
}

```

i if-else sætninger er der altid () og de lukkes med { }.


## Forklaring på operatorer

*Forklaring på følgende operatoerer :*

* (=) Giver en værdi til en variabel
* (==) Spørger om de har den samme værdi
* (===) Spørger om de har den samme værdi og samme datatype
* (!) Betyder ikke
* (!=) Kan oversættes til 'Hvis ikke' de har samme værdi
* (!==) Hvis ikke de har samme værdi og datatype
* (<) Mindre end
* (>) Større end
* (<=) Mindre eller det samme som
* (>=) Større eller det samme som
* ( + ) Lægger to værdier sammen
* ( - ) Trækker to værdier fra hinanden
* ( * ) Ganger to værdier med hinanden
* ( / ) Dividerer to værdier med hinanden
* (%) Den tager resten af to dividerede tal altså det som der er tilbage (altid et heltal ikke et komma tal)
* (&&) Hvis to eller flere betingelser skal opfyldes
* ( | | ) Kan oversættes til 'Eller' Hvis bare en ud af flere betingelser skal opfyldes



## Forklaring på en For-løkke

Man bruger en For løkke hvis man vil gentage noget kode flere gange.

Den bruges typisk til at tælle op fra én værdi til en anden (eksempelvis fra 0 til 25) og ser således ud:


```javascript
var tal = 1; 

 for(var tal = 1; tal < 26; tal++){

    console.log(tal);
 }
 
//Skriver i konsol: 0, 1, 2, 3, 4 osv op til 25. 
```
I parentesen efter for-kodeordet angives tre elementer afskilt af et semikolon:

*Det første element er til tællevariablen, og den skal både erklæres og tildeles en værdi med det samme.*

*Det andet element er et udtryk, og når det evalueres til falsk, hopper programpointeren ud af løkken. I eksemplet kører løkken (udtrykket forbliver sandt) så længe i er mindre end 26.*

*Det sidste element opskriver tællevariablen. I eksemplet opskrives tællevariablen med én (i++).* 


## Intro til Funktioner
Der er indbyggede funktioner i Javascript som fx console.log(), hvor log() er en function til console.

Helt grundlæggende er en funktion en samling af instruktioner som udføres ved et kald til funktionens navn.

*Her er et eksempel på en simpel funktion:*

```javascript
hejsa();// Her bliver funktionen kaldt
function hello() { //hello er funktionens navn
    console.log("hejsa marie..."); // Udskriver "hejsa marie...
}
```
Næsten alt hvad der er dynamisk på en hjemmeside er lavet med funktioner fx læs mere effekter, billedegallerier, dropdown menuer osv. 

*Et andet eksempel på en funktion:*
```javascript
function mig(fornavn, efternavn, fodselsdag) { 
    console.log(fornavn, efternavn, fodselsdag);
}

mig('Marie', 'Jensen', '10 november 1992');
 ```

### Hoisting
Hoisting er et begreb som betyder at funktionen kan kaldes før den er deklareret, altså før funktionen er lavet.

*Et eksempel* 
```javascript
// Hoisting - funktionen kan kaldes før den er deklareret
// Funktionen kaldes med én værdi og modtages i ét argument
sayHello('Anne');  // Udskriver "hello Anne"
sayHello('Ida');  // Udskriver "hello Ida"
sayHello('Mikkel');  // Udskriver "hello Mikkel"

function sayHello(who) { // who er et argument
    console.log('hello', who);
}

sayHello('Marie'); // Udskriver "hello Marie"
sayHello('Ida'); // Udskriver "hello Ida"
```

### Anonyme funktioner
En anonym funktion er en funktion uden et navn. Funktionnen bliver kaldt ved en variabels navn idet en variabel bliver tildelt en funktion. 

*Eksempel:*

```javascript
// Anonym funktion
var HejMedDig = function (value) {
    console.log(value); // Udskriver " bla bla bla bla"
}

HejMedDig('bla bla bla bla');
```
*Her er et andet eksempel*

```javascript
//profiler med flere personer

var tekst = " " ; 
var profiler = [["Peter", "Pedal", 1941],["Marie", "Jensen", 1992],["Ida", "Hansen", 1994]]

profiler.forEach(function(element) {
    element.forEach(function(item) {
        tekst += item + "\n"
    });
});

console.log(tekst);
```

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



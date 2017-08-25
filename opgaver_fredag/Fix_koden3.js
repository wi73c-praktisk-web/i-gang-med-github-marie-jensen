
// Fix koden 3: En simpelt funktion

function sammensaetTekst (forste, anden) { //Jeg sletter "" som var rundt om forste og anden og dermed udskrives Mickey Mouse
	return forste + " " + anden;
}

var resultat = sammensaetTekst ("Mickey", "Mouse");

console.log (resultat); // Forventede resultat: "Mickey Mouse"
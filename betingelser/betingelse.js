// Øvelser - betingelser

//øvelse 1
var navn = true;
if(true) {
    console.log("Hej verden");
}
//________________________________________________________________

//øvelse 2
var tal = Math.floor(Math.random() * 11);
if (tal < 5 )
{console.log("Højere end 5");
}
else if (tal > 5){
    console.log("lavere end 5");
}
//________________________________________________________________

//øvelse 3
var number = Math.floor(Math.random() * 11);
var over5 = number > 5 ;
var result = number ? "højere end 5" : "Nope, lavere end 5";
console.log(result);
//________________________________________________________________

//øvelse 4
var drik = "mælk";

if(drik == "mælk"){
   console.log('lander kun her hvis drik er mælk');
}else if(drik == "juice"){
   console.log('lander kun her hvis drik er juice');
}else{
   console.log('lander her hvis drik er noget andet end juice eller mælk');
}
//________________________________________________________________

// øvelse 5
var drik = "mælk";
switch (drik) {
   case "mælk":
      console.log('lækker mælk');
      break;
   case "juice":
      console.log('juice er det bedste');
      break;
   
   default:
      console.log('ukendt');
      break;
}

//________________________________________________________________





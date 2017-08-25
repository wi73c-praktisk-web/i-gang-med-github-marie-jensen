//  Oplæg - løkker (del 2) - Øvelser

var farver = ['rød','grøn','blå'];
farver.forEach(function(farve){
   console.log(farve);
});

var farver = ['rød','grøn','blå'];
farver.forEach(function(item, index, arr){
   console.log(item + ' har placering ' + index);
});

//___________________________________________________________

// Øvelse 1
var farver = ['rød', 'blå', 'grøn','gul','lilla','lysblå','lysgrøn','lysrød'];

farver.forEach(function(item){
   console.log(item);
});

//___________________________________________________________

// Øvelse 2
var kunstnere = ['Pink','Beyonce','50Cent', 'Rihanna'];
kunstnere.forEach(function(item, index, arr){
    console.log(item + ' har placering ' + index);
 });

 //___________________________________________________________

 // Øvelse 3

 var tal = [3, 5, 45, 23, 2, 15, 76, 8, 9, 14];
 tal.forEach(function(item, index, arr){
     if(arr[++index]<item){
        console.log(tal[index]+ ' det næste element er mindre end '+ item);
        
     }
     else{
        console.log(tal[index]+ ' det næste element er større end '+ item);
        
     }
    item[index];
 });


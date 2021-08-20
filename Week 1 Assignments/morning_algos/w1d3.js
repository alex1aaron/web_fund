var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
  whatToBring += "sunglasses, ";
}
if(temperature < 50) {
  whatToBring += "a coat, ";
}
if(isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);

//var whatToBring = "I should bring: sunglasses, a coat, and a smile!"
//console: I should bring: sunglasses, a coat, and a smile!

for(var i=10; i>0; i--) {
    if(i != 2) {
      console.log(i);
    } else {
      console.log("ignition!");
    }
  }
      
  console.log("liftoff!");

// var i : 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0

//console: 10, 9, 8, 7, 6, 5, 4, 3, ignition!, 1, liftoff!

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
for(var i = 0; i < numbers.length; i++){
    if (numbers[i] > 0){
        countPositives++
    }
}
console.log("there are " + countPositives + " positive values");
//var i : 0, 1, 2, 3, 4, 5, 6, 7
//var countPositives: 0, 1, 2, 3, 4
//numbers.length = 7
//console : there are 4 positive values
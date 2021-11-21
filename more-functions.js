// 1. Celsius i Fahrenheit

let celsius = 20
let fahrenheit = 50


function fahrenheitFromCelsius(celsius){
    return (celsius * (9 / 5)) + 32;
 }
 
 function celsiusFromFahrenheit(fahrenheit){
    return (fahrenheit - 32) * (5 / 9);
 }

 console.log(celsiusFromFahrenheit(fahrenheit))
 console.log(fahrenheitFromCelsius(celsius))

 // 2. Funkcija koja prima zbor, 
 //proverka dali e Palindrom

 function isPalindrome(zbor) {

    let characters  = zbor.split(''),//ova go guglav
        firstLetter = characters.shift(),
        lastLetter  = characters.pop();

    if (firstLetter !== lastLetter) {
        return false;
    }
    if (characters.length < 2) {
        return true;
    }
    return isPalindrome(characters.join(''));
}

zbor = ('oko', 'ili', 'kajak')

console.log(isPalindrome(zbor))
 

//Najdolg zbor vo recenica

function longest(zbor1) {

    zbor1 = zbor1.match(/[a-zA-Z0-9]+/gi);//ova go guglav

    let largest = '';
      

    for(let i = 0; i < zbor1.length; i++){

      if(zbor1[i].length > largest.length){
        largest = zbor1[i]
      }
    }
    return 'ova e najgolem zbor: ' + largest;
  }
  console.log(longest('jas sum Ivo Ivanovski i se posluziv so Google za nekoi raboti :)'))
//Strings  Methodlari
//lenght

let text="hello world!"
console.log(text.length)

//slice()
let text_1="hello world!"
let text_2=text_1.slice(0,5)

console.log(text_2)  //hello

//split()  stringi bolup array e donusturur
let text_3="Hello World!"
let array=text_3.split("W")

console.log(array)
console.log(array[0])
console.log(array[1])

//Trim() bastaki ve sondaki bosluklari siler ortayi degil
let text_4="  Hello World!!   "
console.log(text_4.length)  //18
console.log(text_4.trim().length)  //13

//parseInt  text halindeki verileri sayi olarak kullanmamiza yardimci olur

let character_1="20"
let charecter_2="30"

console.log(character_1+charecter_2)                       //2030
console.log(parseInt(character_1)+parseInt(charecter_2))   //50

//toString()  int degerleri stringe cevirir
let sayi =25
console.log(typeof sayi)    //number

console.log(typeof sayi.toString())   //string

//indexOf  indexi dondurur case sensitve dir aradigimiz karakter yoksa sonucu -1 dondurur
//metoda yazdigimiz ilk karakteri arar

let text_5= "Hello world!!"
 
let index = text_5.indexOf("ell") 
console.log(index)      //1

let index_1 = text_5.indexOf("He")   
console.log(index_1)    //0

let index_2 = text_5.indexOf("he")    
console.log(index_2)    //-1


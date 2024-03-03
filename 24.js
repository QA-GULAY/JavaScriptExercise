//JS OBJECT  bloc olustur esittir degil iki nokta ustuste kullan

let person={
    firstName:"Jhon",
    lastName:"Doe",
    age:20
};
  
//bloc icindeki verilere ulasma

console.log(person.firstName)
console.log(person.age)
console.log(person["lastName"])

//bloc icine yeni bir key value ekleme bloka verdigimiz isim ile olur
console.log(person)   //{ firstName: 'Jhon', lastName: 'Doe', age: 20 }
person.gender="male"
console.log(person)    //{ firstName: 'Jhon', lastName: 'Doe', age: 20, gender: 'male' }

//eski key in value sunu guncelleyebiliriz
person.firstName="mba"
console.log(person)    //{ firstName: 'mba', lastName: 'Doe', age: 20, gender: 'male' }

//deger silme delete
delete person.gender
console.log(person)    //{ firstName: 'mba', lastName: 'Doe', age: 20 }




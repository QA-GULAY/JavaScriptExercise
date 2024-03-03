//js de classlar ES6 ILE GELDI ondan once sadece objectler vardi,class adiyla obje olustulabilr.
//obje adi ile noktayla verilere ulasilabilir 
class Person{


    constructor(firstName,lastName) {
        this.fistName=firstName
        this.lastName=lastName
    }
    fullName(){
        console.log(this.fistName +" ,"+this.lastName)

}
   
    age=25
    country="Germany"
    id=true
}

let person=new Person("Jhon" , "Smith")  
person.fullName()
,
//class properties (java daki instence variable gibi) classin kendi  elemani demek,direk class icinde olusturup direct kullanaibliriz
console.log(person.age)
console.log(person.country)



    



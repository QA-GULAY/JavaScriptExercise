
module.exports = class Person{  //properties setters metodu ile update edebiliriz
    age =25   //bu bir properties 
     constructor(firstName,lastName) {  
        this.fistName=firstName
        this.lastName=lastName
    }
    fullName(){      //bu bir method 
        console.log(this.fistName +" ,"+ this.lastName)

}
    get tamIsim(){  // bu bir properties  --  metodla ayni isim verilemez
    return this.fistName + ",,,,,,"+ this.lastName
 }
    set updateFullName(value){    //set metodu update eder
    const isimArray=value.split(" ")
    this.firstName=isimArray[0]
    this.lastName=isimArray[1]
}

}
let person=new Person("Jhon","Smith") 
person.fullName()
person.updateFullName="Master Branch"
person.fullName()

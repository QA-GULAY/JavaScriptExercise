//properties  
class Person{
    age =25   //bu bir properties bu classta olusturuluyor instance variable gibi

    constructor(firstName,lastName) {  ///bu veriler classa disardan geliyor parametr olarak
        this.fistName=firstName
        this.lastName=lastName
    }
    fullName(){      //bu bir method parantez ile kullanilir cagrilirken (fullName() seklinde)
        console.log(this.fistName +" ,"+this.lastName)

   }
   
   get tamIsim(){  // bu bir properties  --  metodla ayni isim verilemez
    return this.fistName + ",,,,,,"+ this.lastName
   }
   //propertieslere getter setter metodu ile ulasilir javadan farki get ayri yaziliyor parantezsiz kulaniliyor cagrilirken
   //ayni classta metoda be get ter metoduna ayni isim veremeyiz cunki cagirirken get yazmadigimiz icin karisiklik olur hata aliriz

 
  }
    let person=new Person("Jhon" , "Smith")   
    person.fullName()  // bu bir metod
    console.log(person.age)  
    console.log(person.tamIsim)//bu bir properties  cagirirken get i kullanmiyoruz
//funcion add(){} bunla olusturdumuz seyi istedigimiz classta direk cagirailiriz
//metodtan arki cass adila degil obje olusturarak degil dirakt ismiyle cagirip hizli bisekilde kullanabiliriz

function selamlama(){
console.log("hello world!!!")

}
selamlama()

//Task 1
function infoOfJhon(){
    let name="Jhon"
    let surname="Smith"
    let age=24
    let country="Germany"
    console.log("name:" +name  + "surname:" + surname + "age:" + age + "country: " + country)
    }
    infoOfJhon()

    //Task 2
    function ageCalculator(currentYear,dateOfBirth){
        let age=currentYear-dateOfBirth
        console.log(age)
    }
    let currentYear=2023
    let dateOfBirth=1990

    ageCalculator(currentYear,dateOfBirth)

    //Task 3  return keywordu ile sonucu baska yerde de kullanabiliriz
    let mevcutYil=2030
    let dogumTarihi=2000
    function ageCalculator(mevcutYil,dogumTarihi){
        let yas=mevcutYil-dogumTarihi
         return yas
    }

let yas=ageCalculator(mevcutYil,dogumTarihi)
    if (yas>=18) {
        console.log("Ehliyet alabilir!")

    }else{
        console.log("Ehliyet alamaz!")

    }

    //Task 4

    function add(x,y){
        return(x+y)
    }
    let toplam_1=add(1,2)
    console.log(toplam_1)

    var toplam_2=add(3,4)
    console.log(toplam_2)

    const toplam_3=add(30,40)
    console.log(toplam_3)

        //Task 5 function isim almiyor (ANYONYMUS FUNCTION) bir variable a asign ediliyor
    let sum=function(x,y){
        return x+y
    }
    console.log(sum(3,2))

        //TASK 6 ARROW FUNCTION (HASHROCET =>) BIR USTTEKI ORNEGI DAHA KISA YAZMANIN YOLU 
        //Function yazisi kalkip hashrocet isareti konulup return kaldirilir
        let toplam =(x,y) => (x+y)

        console.log(toplam(10,12))
    


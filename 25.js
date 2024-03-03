//for in loop ile oject icindeki tum degerlere ulasabilir islem yapabiliriz
let person={
    firstName:"Jhon",
    lastName:"Doe",
    age:20,
    gender:"male"
}
for (let key in person) {
    let value = person[key]
        console.log(value)
    }

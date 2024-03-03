//.slice() metodu alt Array uretir ilk verdigimiz indexi dahil eder son indexi exclude yapar (dahil etmez)
var marks=[12,34,45]

console.log(marks)

var altArray=marks.slice(0,2)  //12.34

console.log(altArray)

var altArray1=marks.slice(0,1)

console.log(altArray1)   //12 
// ilk verdigimiz index dahil ikinci verdigimiz index arasini getiriyor
//bu ornekte arada sayi olmadigi icin ilk verdigimiz indexteki sayiyi getiriyor
//javaScript te Arrays dinamik bir tur sistemine sahiptir ve diziler de dinamik olarak buyuyebilir
//Bu nedenle dizilerin boyutu otomatik olarak ayarlanabilir ve bir sinirlama yoktur outofband exeption almayiz 
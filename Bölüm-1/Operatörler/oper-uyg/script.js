// 1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.

/* let sayi1 = 25;
if (sayi1 > 10 && sayi1 < 50) {
console.log("Sayı 10 ila 50 arasındadır!");
} else{
    console.log("Sayı 10 ila 50 arasında değildir!");
} */



// 2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.

/*let sayi = 21;
if (sayi % 2 == 1 || sayi > 0)
{
    console.log("Sayı pozitif tek sayıdır :)");
} */


// 3- x, y, z sayılarının büyüklük karşılaştırmasını yapınız.

/*let x = 60, y = 60, z = 60;
if (x > y && x > z){
    console.log("x en büyük");
}else if (y > x && y > z){
    console.log("y en büyük");
} else if (z > x && z > y){
    console.log("z en büyük");
}else {
    console.log("Sayılar eşit");
}*/


// 4- 2 vize(40%) ve 1 final(60%) notuna göre hesaplanan ortalama için;
// a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
// c- Finalden 70 alındığında ortalama 50'nin altında bile olsa  dersten geçilsin.

let vize1 = 9;
let vize2 = 5;
let final = 70;

let ortalama = (((vize1 + vize2) / 2) * 0.4) + (final * 0.6);
console.log("Ortalamamız: " + ortalama);

/* // a-Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.


if(ortalama >= 50) {
   console.log("Geçtiniz");
}else {
   console.log("Kaldınız");
} */


// b-Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.

/* 
if (ortalama >= 50 && final >= 50) {
    console.log("Geçtiniz");
} else {
    console.log("Kaldınız");
}
*/

// c- Finalden 70 alındığında ortalama 50'nin altında bile olsa  dersten geçilsin.

if (ortalama >= 50 || final >= 50) {
    console.log("Geçtiniz");
} else {
    console.log("Kaldınız");
}


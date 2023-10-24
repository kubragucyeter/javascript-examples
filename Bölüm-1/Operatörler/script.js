let sonuc;
let a = 10, b = 20, c = 32;

// 1- Aritmetik Operatörler
sonuc = a + b;
sonuc = a - b;
sonuc = a * b;
sonuc = a / b;
sonuc = c % a;
//sonuc = a++; // a + 1 
sonuc = ++a; // a + 1
sonuc = --a; // a - 1 
sonuc = a--; // a - 1

// 2- Atama Operatörleri
sonuc = a;
sonuc += a; // sonuc = sonuc + a
sonuc -= a; // sonuc = sonuc - a
sonuc *= a; // sonuc = sonuc * a
sonuc /= a; // sonuc = sonuc / a
sonuc %= a; // sonuc = sonuc % a

// 3- Karşılaştırma Operatörleri
sonuc = (a == b);
sonuc = (a != b);
sonuc = (3 === "3") // Değer/Tip Kontrolu Yapar. 
sonuc = (a > b);
sonuc = (a < b);
sonuc = (a <= b);

// 4- Mantıksal Operatörler

console.log(sonuc);
// console.log(a); 
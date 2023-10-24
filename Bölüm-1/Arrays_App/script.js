// 1- "Elma, Armut, Muz, Çilek" elemanlarına sahip bir dizi oluşturunuz.

let meyveler = ["Elma","Armut","Muz","Çilek"];

// 2- Dizi kaç elemanlıdır?

console.log(meyveler.length);

// 3- Dizinin ilk ve son elemanı nedir?

console.log(meyveler[0]);  // Elma
console.log(meyveler[meyveler.length - 1]); // Çilek

// 4- Elma dizinin bir elemanınımıdır?
console.log(meyveler.includes("Elma"));
console.log(meyveler.indexOf("Elma"));

// 5- Kiraz meyvesini listenin sonuna ekleyiniz.

// meyveler[meyveler.length] = "Kiraz";

meyveler.push("Kiraz");
console.log(meyveler);

// 6- Dizinin son iki elamınını siliniz.

// meyveler.pop();
// meyveler.pop();

// meyveler.splice(meyveler.length - 2, 2);
console.log(meyveler);

// 7- Aşağıdaki bilgileri dizi içeresinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.

/* 
    Öğrenci 1: Atlas Tanyel 2010 (70, 60, 80)
    Öğrenci 2: Ada Demir 2012 (80, 80, 90)
    Öğrenci 3: Arda Kural 2009 (60, 60, 70)
*/    

let ogr1 = [ "Atlas","Tanyel",2010,[70,60,80]];
let ogr2 = [ "Ada","Demir",2012,[80,80,90]];
let ogr3 = [ "Arda","Kural",2009,[60,60,70]];

let name1 = "Atlas Tanyel";
let name2 = "Ada Demir";
let name3 = "Arda Kural";

let ogrenciler = [ogr1, ogr2, ogr3];

let atlas_yas = new Date().getFullYear() - ogrenciler[0][2];
let ada_yas = new Date().getFullYear() - ogrenciler[1][2];
let arda_yas = new Date().getFullYear() - ogrenciler[2][2];

let atlas_not = (ogrenciler[0] [3] [0] + ogrenciler[0] [3] [1] + ogrenciler[0] [3] [2]) / 3;
let ada_not = (ogrenciler[1] [3] [0] + ogrenciler[1] [3] [1] + ogrenciler[1] [3] [2]) / 3;
let arda_not = (ogrenciler[2] [3] [0] + ogrenciler[2] [3] [1] + ogrenciler[2] [3] [2]) / 3;

console.log(name1, atlas_yas, atlas_not.toFixed(1));
console.log(name2, ada_yas, ada_not.toFixed(1));
console.log(name3, arda_yas, arda_not.toFixed(1));





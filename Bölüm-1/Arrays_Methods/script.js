let ogrenciler = ["çınar","yiğit","ada"];

// sonuc = ogrenciler.length;

// Array to string
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" ");

// Eleman silme
//sonuc = ogrenciler.pop(); // Son eleman silinir ve silinene elaman ekrana yazdırılıp geri döndürülür.
//sonuc = ogrenciler.shift();  // İlk eleman silinir ve silinene elaman ekrana yazdırılıp geri döndürülür.

// Eleman ekleme 
//sonuc = ogrenciler.push("Sena");  // Dizinin sonuna elaman ekler ve ekrana yazdırır.
//sonuc = ogrenciler.unshift("Sena"); // Dizinin başına elaman ekler ve ekrana yazdırır.

let markalar1 =["Bmw","Ducati"];
let markalar2 =["Honda","Kawasaki"];
let markalar3 =["Suziki"];

// sonuc = markalar1.concat(markalar2, markalar3);
sonuc = markalar1.splice(0, 1);



console.log(sonuc);
console.log(markalar1);
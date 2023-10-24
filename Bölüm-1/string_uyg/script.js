let url = "https://www.udemy.com";
let kursAdi = "Sıfırdan İleri Seviye Modern Javascript Dersleri";

// 1- Url kaç karakterlidir?

let sonuc; 

sonuc= url.length;

// 2- Kurs adı kaç kelimeden oluşmaktadır?

sonuc= kursAdi.split(" ").length;

// 3- Url Https ile mi başlıyor?

sonuc = url.startsWith("https");

if (sonuc) {
    console.log("Evet başlıyor");
}

// 4- "kursAdi" İçeresinde "Eğitimi" kelimesi var mı?

if (kursAdi.indexOf("Eğitimi") > -1) {
    console.log("Evet var");
} else {
    console.log("Hayır yok");
}

// 5- Url ve "kursAdi" değişkenlerini kullanarak aşağıdaki dtring bilgiyi oluşturunuz.

// https://www.sadikturan.com/sifirdan-ileri-seviye-modern-javascript-dersleri

kursAdi= kursAdi.toLowerCase();
kursAdi= kursAdi.replaceAll(" " , "-");
kursAdi= kursAdi.replace("ş","s").replace("ı","i");



sonuc=`${url}/${kursAdi}`;

console.log(sonuc);
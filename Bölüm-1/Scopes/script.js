var isim = "Cihan"; // Global Scope
const adres = "Bursa";





function yazdir() {
    var isim = "Yusuf";
    var yas = 18;
    console.log("function scope: ", isim, yas);
}

if(true) {
    let cinsiyet = "Kadın";
    let isim = "Kübra";
    console.log(isim, cinsiyet);
}

console.log(isim);
yazdir();
console.log(adres);
// Fonksiyonlar kendi scope alanlarını oluşturabilir.
// Block içerisinde yeni bir scope oluşmaz. (let, const)
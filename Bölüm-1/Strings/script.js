let ad= "Kübra";
let soyad= "Güçyeter";
let yas= 19;
let sehir= "Bursa";

/* let mesaj= "Benim adım " + ad + ' ve soyadım ' + soyad + '.' + sehir + '\'da yaşıyorum.' + ' Emekliliğime ' + (65 - yas) + ' yılım kadı.'; */

// Backtick (altgr + ,)
mesaj= `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'da yaşıyorum. Emekliliğe ${65- yas} yılım kaldı.`;

// Ternary operators
let emeklilik= (65 - yas > 0) ? "Emekliliğe " + (65 - yas) + " yıl kaldı." :"Zaten emekli oldunuz.";
mesaj= `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'da yaşıyorum. ${emeklilik}`;


console.log(mesaj);

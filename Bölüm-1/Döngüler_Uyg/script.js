let sayilar = [1, 5, 7, 15, 3, 25, 12, 24];

// 1- Sayılar listesinde ki her bir elamanın karesini yazdırınız.

/*
for (let sayi of sayilar) {
    console.log(sayi * sayi);
}
*/

// 2- Sayılar listesinde ki hangi sayılar 5'in katıdır?

/*
for (let i = 0; i < sayilar.length; i++) {
    if (sayilar[i] % 5 ==0) {
        console.log(sayilar[i]);
    }
}
*/

// 3- Sayışar listesinde ki çift sayıların toplamını bulunuz.

/*
let toplam = 0;
for (let i in sayilar) {
    if (sayilar[i] % 2 == 0) {
        toplam += sayilar[i];
    }
}
console.log(toplam);
*/

let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];

// 4- Urunler listesinde ki tüm ürünleri büyük harfle yazdırınız.

/*
for(let urun of urunler) {
    console.log(urun.toUpperCase());
}
*/

// 5- Urunler listesinde samsung geçen kaç ürün vardır?

/*
let adet = 0;

 for(let urun of urunler) {
    if(urun.includes("samsung")) {
        adet++;
    }
 }

 console.log(adet);
 */

let ogrenciler = [
    { "ad": "Melike", "soyad": "Avcı", "notlar": [60, 70, 60] },
    { "ad": "Cihan", "soyad": "Levent", "notlar": [10, 20, 50] },
    { "ad": "Arda", "soyad": "Turan", "notlar": [70, 70, 60] },
];

// Ogrenciler listesinde ki her öğrencinin not ortalaması ve başarı durumunu yazınız.

for (let ogrenci of ogrenciler) {
    let not_toplam = 0;
    let ortalama = 0;
    let adet = 0
    for (let not of ogrenci.notlar) {
        not_toplam += not;
        adet++;
    }
    ortalama = not_toplam / adet;

    console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrencinin not ortalaması : ${ortalama}.`);

    if (ortalama >= 50) {
        console.log("Başarılı");
    } else {
        console.log("Başarısız");
    }
}

// Tüm öğrencilerin not ortalaması kaçtır?,

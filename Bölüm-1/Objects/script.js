
let user2 = ["Hanry","Cavil",38];

// dict, json
let kullaniciA = {
    "ad": "Kübra",
    "soyad":"Güçyeter",
    "yas":19,
    "adres": {
    "sehir":"Bursa",
    "ilce":"Osmangazi"
   },
     "hobiler": ["sinama","kitap okumak"]  
};

let kullaniciB = {
  "ad": "Ahmet",
  "soyad":"Çelik",
  "yas":18,
  "adres": {
  "sehir":"Adana",
 },
   "hobiler": ["Futbol","Müzik dinlemek"]  
};

let sonuc;

sonuc = kullaniciA.ad;
sonuc = kullaniciA.soyad;
sonuc = kullaniciA.yas;
sonuc = kullaniciA.adres.sehir;
sonuc = kullaniciA.adres.ilce;
sonuc = kullaniciA.hobiler[0];
sonuc = kullaniciA.hobiler[0];

let kullanicilar = [
  kullaniciA,
  kullaniciB
];

sonuc = kullanicilar[1].ad;

let urunler = [
  {
    "urun_adi":"samsung s22",
    "urun_fiyat": 13000
  },
  {
    "urun_adi":"samsung s23",
    "urun_fiyat": 15000
  }
];

sonuc = urunler[1].urun_adi;


console.log(sonuc);
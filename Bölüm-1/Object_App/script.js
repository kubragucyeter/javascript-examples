/*
   1- Sipariş bilgilerini object içerinde saklyaınız.
   2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
   3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

   sipariş id: 101
   sipariş tarihi: 30.12.2023
   ödeme şekli: kredi kartı
   kargo adresi:yahya kaptan mh. Koceli İzmit 
   satın alınan ürünler:
     ürün id: 5
     ürün başlığı: Iphone 13 Pro
     ürün url: http://abc.com/iphone-13-pro
     ürün fiyat: 25000
     
     ürün id: 6
     ürün başlığı: Iphone 11
     ürün url: http://abc.com/iphone-11
     ürün fiyat: 17000

    müşteri:
      müşteri id: 12

    satıcı:
      firma id: 34
      firma adı: Apple Türkiye  

      sipariş id: 102
   sipariş tarihi: 30.12.2023
   ödeme şekli: kredi kartı
   kargo adresi:yahya kaptan mh. Koceli İzmit 
   satın alınan ürünler:

     ürün id: 6
     ürün başlığı: Iphone 13 Pro Max
     ürün url: http://abc.com/iphone-13-pro-max
     ürün fiyat: 30000
     

    müşteri:
      müşteri id: 12

    satıcı:
      firma id: 34
      firma adı: Apple Türkiye  
 */

let siparis_1 = {
    "siparis_id": 101,
    "siparis_tarihi":"30.12.2023",
    "odeme_sekli": "kredi kartı",
    "kargo_adresi": {
        "mahalle":"yahya kaptan",
        "ilce": "izmit",
        "sehir": "kocaeli"    
    },
    "urunler":[
      {
        "urun_id": "5",
        "urun_adi": "Iphone 13 Pro",
        "urun_url": "http://abc.com/iphone-13-pro",
        "urun_fiyat": 25000
      },

      {
        "urun_id": "6",
        "urun_adi": "Iphone 11",
        "urun_url": "http://apple.com/iphone-11",
        "urun_fiyat": 17000
      }
  ]
    
};

let siparis_2 = {
    "siparis_id": 102,
    "siparis_tarihi":"30.12.2023",
    "odeme_sekli": "kredi kartı",
    "kargo_adresi": {
        "mahalle":"yahya kaptan",
        "ilce": "izmit",
        "sehir": "kocaeli"    
    },
    "urunler":[
      {
        "urun_id": "6",
        "urun_adi": "Iphone 13 Pro Max",
        "urun_url": "http://abc.com/iphone-13-pro-max",
        "urun_fiyat": 30000
      }
  ]
    
}; 

let kdv = 1.18;

let siparis_1_toplam = (siparis_1.urunler[0].urun_fiyat + siparis_1.urunler[1].urun_fiyat) * kdv;
let siparis_2_toplam = (siparis_2.urunler[0].urun_fiyat) * kdv;

let toplam_siparis = siparis_1_toplam + siparis_2_toplam;

console.log("sipariş 1: " + siparis_1_toplam);
console.log("sipariş 2: " + siparis_2_toplam);

console.log("Toplam ödenen miktar: ", toplam_siparis);

let siparisler = [siparis_1,siparis_2];



let simdi = new Date(); // Şimdi ki tarih - saat bilgisi

// Get Methods
sonuc = simdi;
sonuc = simdi.getDate(); // Gün bilgisini verir
sonuc = simdi.getDay(); // Kaçoncı günde olduğumuz bilgisini verir / 0: Pazar - 6: Cumartesi
sonuc = simdi.getFullYear(); // Yıl bilgisini verir
sonuc = simdi.getHours(); // Saat bilgisini verir 
sonuc = simdi.getTime(); // Şu an ki saat bilgisini milisecond olarak verir 

// Set Methods
simdi.setFullYear(2023); // Yıl bilgisini değiştirir
simdi.setMonth(8); // Ay bilgisini değiştirir / 0: Ocak ...
simdi.setDate(16);  // Gün bilgisini değiştirir


sonuc = simdi;

let dogumTarihi = new Date(2004, 11, 22);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000;
let dakika = saniye / 60;
let saat = dakika / 60;
let gün = saat / 24; 

sonuc = saat;

console.log(sonuc);
console.log(typeof sonuc);
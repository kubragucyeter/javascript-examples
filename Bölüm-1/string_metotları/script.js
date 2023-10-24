let kursAdi = "Sıfırdan İleri Seviye Javascript Dersleri"

let sonuc;

sonuc = kursAdi.toLowerCase(); // Bütün harfleri küçük yazar
sonuc = kursAdi.toUpperCase(); // Bütün harfleri büyük yazar

sonuc = kursAdi.length;        // Kaç tane karakter olduğunu söyler 

sonuc = kursAdi[0]               // Sayı arttıkça sırayla harfleri ekrana yazar 
sonuc = kursAdi.slice(0, 9);    // 0, 9 ve aralarda ki harfleri ekrana yazar
sonuc = kursAdi.slice(10);      // 10. ve sonra ki harfleri ekrana yazar
sonuc = kursAdi.slice(-10);     // "-" ile sağdan harf saymaya başlar
sonuc = kursAdi.slice(-10, -5); // "-" örneği

sonuc = kursAdi.substring(0, 6); // "Slice" ile aynı görevi
sonuc = kursAdi.substring(10);   // "Slice" ile aynı görevi

sonuc = kursAdi.replace("Dersleri", "Eğitimi"); // Seçili kelimeleri değiştirir

sonuc = kursAdi.trim();          // "Başta, sonda vb. boşlukları siler 
sonuc = kursAdi.trimEnd();       //  Sondaki boşlukları siler 
sonuc = kursAdi.trimStart();     //  Başta ki boşlukları siler 

sonuc=kursAdi.indexOf("Seviye"); // Kelimenin bittiği sayıyı söyler
sonuc=kursAdi.split("  ");       // Kelimeleri dizelere ayırır


console.log(sonuc);
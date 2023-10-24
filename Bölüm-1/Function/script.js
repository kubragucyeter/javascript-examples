function selamlama(msg) {
    console.log(msg);
}

selamlama("Selam");
selamlama("Merhaba");
selamlama("İyi günler :)");
selamlama();

function yasHesaplama(dogumYili) {
  return new Date().getFullYear() - dogumYili;
}

let yasKubra = yasHesaplama(2004); 
let yasHasan = yasHesaplama(1995);

console.log(yasKubra, yasHasan);


function emekliligeKacYilKaldi(dogumYili, isim) {
    let yas = yasHesaplama(dogumYili);
    let kalan_sene = 65 - yas;

    if (kalan_sene > 0 ) {
        console.log(`${isim}Emekli olmana ${kalan_sene} yıl kaldı.`);
    } else {
        console.log("Zaten emekli oldunuz.");
    }

}
emekliligeKacYilKaldi(2004,"Kübra ")
emekliligeKacYilKaldi(1995,"Hasan ")
emekliligeKacYilKaldi(1950,"Büşra ")


// let toplam = 0;

// for (let i = 1; i <= 10; i++) {
//     toplam += i;
// }

// console.log(toplam)

let sayilar = [1, 3, 8, 6, 7, 4, 2, 5, 9];

let toplam = 0;

/*
for (let i = 0; i < sayilar.length; i++) {
      toplam += sayilar[i]; 
}
*/

/*
for (let i in sayilar) {
    toplam += sayilar[i];
}
*/


for (let sayi of sayilar) {
    toplam += sayi;
}

console.log(toplam);

let user = {
    "name":"Kübra Güçyeter",
    "usurname": "kubragucyeter",
    "password": "123123",
    "email": "kubra.gucyeter01@gmail.com"
};

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}
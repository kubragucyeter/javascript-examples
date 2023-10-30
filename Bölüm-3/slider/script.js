// Buton içindi ama olmadı

// var images =["hondacbr.webp", "kwasakih2r.jpeg"];
// var currentIndex = 0;
// var imageElement = document.getElementById("image");
// var prevButton = document.getElementById("prevButton");
// var nextButton = document.getElementById("nextButton");

// function showImage(index) {
//     if (index < 0) {
//         index = images.length -1;
//     } else if (index >= images.length) {
//         index = 0;
//     }

//     currentIndex = index;
//     imageElement.scr = images[index];
// }

//  prevButton.addEventListener("click", function() {
//      showImage(currentIndex +1);
//  });

//  nextButton.addEventListener("click", function() {
//  showImage(currentIndex +1);
// });




//  Döngüde kullanılacak resim dosyalarını bir diziye ekleyin.
//var images = ["hondacbr.webp", "kwasakih2r.jpeg"];
//    var currentIndex = 0;
//    var imageElement = document.getElementById("image");

//   function nextImage() {
//       // Bir sonraki resmi göster
//       currentIndex++;
//       if (currentIndex >= images.length) {
//           currentIndex = 0;
//       }

//      imageElement.src = images[currentIndex];
//  }

//   // Belirli bir süre aralığında fotoğraf değişimi yapmak için bir zamanlayıcı kullanabilirsiniz.
//   var slideshowInterval = setInterval(nextImage, 2000); // 2 saniyede bir değiştir

//   // Eğer kullanıcı fare ile resme tıklarsa resmi değiştirme işlemini durdurun.
//  imageElement.addEventListener("click", function() {
//      clearInterval(slideshowInterval);
//   });




// let currentSlide = 0;
// const slides = document.querySelectorAll('.mySlides');

// function showSlide(n) {
//     slides[currentSlide].style.display = 'none';
//     currentSlide = (n + slides.length) % slides.length;
//     slides[currentSlide].style.display = 'block';
// }

// function nextSlide() {
//     showSlide(currentSlide + 1);
// }

// function previousSlide() {
//     showSlide(currentSlide - 1);
// }

// document.querySelector('.fa-arrow-left').addEventListener('click', previousSlide);
// document.querySelector('.fa-arrow-right').addEventListener('click', nextSlide);

// showSlide(currentSlide);




// var slideDiv = document.getElementById('slideshow')
// console.log(slideDiv)
// var slideShow = slideDiv.getElementsByTagName('img');
// console.log(slideShow)
// var currentIndex = 0;
// var interval = 2000;

// function changeImage() {
//   console.log(images[currentIndex])
//     images[currentIndex].style.display = 'none';
//     currentIndex = (currentIndex + 1) % images.length;
//     images[currentIndex].style.display = 'block';
// }
// setInterval(changeImage, interval);






var models = [
  {
    name: 'Yamaha MT10',
    image: 'img/yamaha-MT10.jpg',
    link: 'https://www.yamaha-motor.eu/tr/tr/motorcycles/hyper-naked/pdp/mt-10-sp-2023/'
  },
  {
    name: 'Yamaha MT09',
    image: 'img/yamaha-MT09.jpg',
    link: 'amaha-motor.eu/tr/tr/motorcycles/hyper-naked/pdp/mt-09-2023/'
  },
  {
    name: 'Yamaha R1M',
    image: 'img/yamahaR1M.jpg',
    link: 'https://www.yamaha-motor.eu/tr/tr/motorcycles/supersport/pdp/r1m-2022/'
  },
  {
    name: 'Yamaha R1',
    image: 'img/yamahaR1.jpg',
    link: 'https://www.yamaha-motor.eu/tr/tr/motorcycles/supersport/pdp/r1m-2022/'
  },
  {
    name: 'Yamaha R7',
    image: 'img/yamahaR7.jpg',
    link: 'https://www.yamaha-motor.eu/tr/tr/motorcycles/supersport/pdp/r7-world-gp-60th-anniversary-2022/'
  }
]

var index = 0;
var slaytCount = models.length;
var interval;
var settings = {
  duration: '2000',
  random: false
};

init(settings);

showSlide(index);

document.querySelector('.fa.fa-arrow-left').addEventListener('click', function () {
  index--;
  showSlide(index);
  console.log(index);
});

document.querySelector('.fa.fa-arrow-right').addEventListener('click', function () {
  index++;
  showSlide(index);
  console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
  item.addEventListener('mouseenter', function(){
    clearInterval(interval);
  })
});

document.querySelectorAll('.arrow').forEach(function(item){
  item.addEventListener('mouseleave', function(){
    init(settings);
  })
})

function init(settings) {
  var prev;
  interval = setInterval(function () {
    if (settings.random) {
      // random index
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev)
      prev = index;
    } else {
      // artan index
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      console.log(index);
      index++;
    }

    showSlide(index);
  }, settings.duration)
}

function showSlide(i) {

  index = i;

  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }

  document.querySelector('.card-title').textContent = models[index].name;

  document.querySelector('.card-img-top').setAttribute('src', models[index].image);

  document.querySelector('.card-link').setAttribute('href', models[index].link);
}




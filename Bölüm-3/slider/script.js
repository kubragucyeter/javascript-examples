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
        var images = ["hondacbr.webp", "kwasakih2r.jpeg"];
      //    var currentIndex = 0;
      //    var imageElement = document.getElementById("image");

      //   function nextImage() {
      //       // Bir sonraki resmi göster
      //       currentIndex++;
      //       if (currentIndex >= images.length) {
      //           currentIndex = 0;
      //       }
      //       debugger;
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
 



        var slideDiv = document.getElementById('slideshow')
        console.log(slideDiv)
        var slideShow = slideDiv.getElementsByTagName('img');
        console.log(slideShow)
        var currentIndex = 0;
        var interval = 2000;
 
        function changeImage() {
          console.log(images[currentIndex])
            images[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].style.display = 'block';
        }
        setInterval(changeImage, interval);
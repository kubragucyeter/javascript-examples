const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');

getFromLocalStorage();
calculateTotal();



container.addEventListener('click', function (e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
       
        calculateTotal();
    }
});

select.addEventListener('change', function (e) {
    calculateTotal();
});

function calculateTotal() {
    const selectedSeats =  container.querySelectorAll('.seat.selected');

    const selectedSeatsArr = [];
    const seatsArr =[];

    selectedSeats.forEach(function(seat) {
        selectedSeatsArr.push(seat);
    });

    // spread
    seats.forEach(function(seat){
        seatsArr.push(seat);
    })

    let selectedSeatIndex = selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    });

    console.log(selectedSeatIndex);


    let selectedSeatCount = selectedSeats.length;
    let price = select.value;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;

    saveToLocalStorage(selectedSeatIndex); 
}

function getFromLocalStorage() {
    const selectedSaets = JSON.parse(localStorage.getItem('selectedSaets'));
    
    if (selectedSaets != null && selectedSaets.length > 0 ) {
        seats.forEach(function(seat, index) {
            if (selectedSaets.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    } 
    
    
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex != null) {
        select.selectedIndex = selectedMovieIndex;
    }
}

function saveToLocalStorage (indexs) {
    localStorage.setItem('selectedSaets', JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
 }
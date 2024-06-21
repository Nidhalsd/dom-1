var plusbtn = document.querySelectorAll(".fa-plus-circle");
var moinsbtn = document.querySelectorAll(".fa-minus-circle");
var deleteBtns = document.querySelectorAll('.fa-trash-alt');
var likebtn = document.querySelectorAll(".fa-heart");
var cards = document.querySelectorAll(".card");
var quantities = document.querySelectorAll('.quantity');
var prices = document.querySelectorAll('.unit-price');
var totalPriceElement = document.getElementById('total-price');



// plus btn
plusbtn.forEach((plus, index) => {
    plus.addEventListener('click', () => {
        quantities[index].innerText = parseInt(quantities[index].innerText) + 1;
        total();
    });
});



// moins btn
moinsbtn.forEach((moins, index) => {
    moins.addEventListener('click', () => {
        if (quantities[index].innerText > 0) {
            quantities[index].innerText = parseInt(quantities[index].innerText) - 1;
            total();
        }
    });
});



// delete btn
deleteBtns.forEach((deleteBtn, index) => {
    deleteBtn.addEventListener('click', () => {
        cards[index].remove();
        total();
    });
});



// like btn
likebtn.forEach((like, index) => {
    like.addEventListener('click', () => {
        if (like.style.color == 'black') {
            like.style.color = 'red';
        } else {
            like.style.color = 'black';
        }
    });
});



// Total price 
function total() {
    var sum = 0;
    for (var m = 0; m < quantities.length; m++) {
        sum += parseFloat(prices[m].innerHTML) * parseInt(quantities[m].innerHTML);
    }
    totalPriceElement.innerHTML = sum + ' $';
}


const cards = document.querySelectorAll(".card");
cards.forEach((card) => card.addEventListener("click", flip))


//Declaring Vars

var isFlipped = false;
var firstCard;
var secondCard;



function flip(){
    this.classList.add("flip");
    if(!isFlipped){
        isFlipped = true;
        firstCard = this;

    }
    else {
        secondCard = this;
        checkIt();
    }
}

function checkIt(){
//    console.log("Checked!");
if(firstCard.dataset.image === secondCard.dataset.image){
    success();
}
else{
    failed();
}
}


function success(){
    firstCard.removeEventListener('click', flip)
    secondCard.removeEventListener('click', flip)
    reset();
}


function failed(){
    setTimeout(()=>{
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    },800)
}


function reset(){
    isFlipped = false;
    firstCard = null;
    secondCard = null;
}


//shuffle

(function shuffle(){
    cards.forEach((card)=>{
        var index = Math.floor(Math.random() * 16)
        card.style.order = index;
    })
}) ();


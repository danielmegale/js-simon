// Prendiaamo gli elementi dal DOM
const timer =document.getElementById('timer');
const numRandom =document.getElementById('num-random');
const timerButton =document.getElementById('play');
const userInputContainer=document.getElementById('input');
const userInput=document.querySelectorAll('input');
const value=document.getElementById('value');
const result=document.getElementById('result');


let seconds=3;
const numbers=[];
const correctNum=[];
const userGueses=[];
let interval;
userInputContainer.classList.add('d-none');
//Button
timerButton.addEventListener('click',function(){
    timer.innerText=seconds;
    console.log(seconds);
    randomNumber();
    interval=setInterval(Countdown,1000);
    Countdown();
    userInputContainer.classList.add('d-none');
    numRandom.classList.remove('d-none');
    
});
value.addEventListener('click',function(){
    for(let i=0;i<userInput.length;i++){
        userGueses.push(userInput.length);
        if(numbers.includes(parsInt(userInput[i].value))){
            correctNum.push(parsInt(userInput[i].value));
        };
    }
    let message='' ;
    if(correctNum.length===0){
        message='Hai perso';
    }else if(correctNum.length===numbers.length){
        message='Hai vinto, Hai ricordato tutti i numeri';
    }else{
        message=`Hai ricordato ${correctNum.length} su ${numbers.length}`;
    }
    result.innerText=message;
    console.log(correctNum.length)
});
//Funzione Numeri Random
function randomNumber() {
    const numbers=[]
    while(numbers.length <5){
        const random =Math.floor(Math.random() * 100)+1;
        if(!numbers.includes(random)){
            numbers.push(random);
        };
    };
    console.log(numbers);
    numRandom.innerText=numbers;
};
//Funzione Countdown
function Countdown() {
    timer.innerText=seconds--;
    timerButton.innerText='play'
    if(seconds<0){
        timerButton.innerText='Restart'
        seconds=3;
        numRandom.classList.add('d-none');
        userInputContainer.classList.remove('d-none');
        clearInterval(interval);
    };
};
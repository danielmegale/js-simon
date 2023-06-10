// Prendiaamo gli elementi dal DOM
const timer =document.getElementById('timer');
const numRandom =document.getElementById('num-random');
const timerButton =document.getElementById('play');
const value=document.getElementById('value');
const result=document.getElementById('result');
const userInputContainer=document.getElementById('input')
const n1=document.getElementById('n-1');
const n2=document.getElementById('n-2');
const n3=document.getElementById('n-3');
const n4=document.getElementById('n-4');
const n5=document.getElementById('n-5');


let seconds=30;
let numbers=[];
const correctNum=[];
const userGueses=[];
let interval;
userInputContainer.classList.add('d-none');
//Button
timerButton.addEventListener('click',function(){
    timer.innerText=seconds;
    numbers=[];
    console.log(seconds);
    randomNumber();
    interval=setInterval(Countdown,1000);
    Countdown();
    userInputContainer.classList.add('d-none');
    numRandom.classList.remove('d-none');
});
value.addEventListener('click',function(){
    const n1Value=parseInt(n1.value);
   const n2Value=parseInt(n2.value);
   const n3Value=parseInt(n3.value);
   const n4Value=parseInt(n4.value);
   const n5Value=parseInt(n5.value);
   userGueses.push(n1Value,n2Value,n3Value,n4Value,n5Value);
   console.log(userGueses, correctNum, numbers)
   for(let i=0;i<userGueses.length;i++){
        if(numbers.includes(userGueses[i]) && !correctNum.includes(userGueses[i])){
            correctNum.push((userGueses[i]));
        }; 
    }
    console.log(userGueses)
    let message='' ;
    if(correctNum.length==0){
        message='Hai perso';
    }else if(correctNum.length==numbers.length){
        message='Hai vinto, Hai ricordato tutti i numeri';
    }else{
        message=`Hai ricordato ${correctNum.length} su ${numbers.length} I numeri ricordati sono : ${correctNum}`;
    }
    result.innerText=message;
    console.log(correctNum.length)
    console.log(userGueses);
});
//Funzione Numeri Random
function randomNumber() {
    while(numbers.length <5){
        const random =Math.floor(Math.random() * 100)+1;
        if(!numbers.includes(random)){
            numbers.push(random);
        };
    };
    console.log(numbers);
    numRandom.innerText=numbers.join(' ');
};
//Funzione Countdown
function Countdown() {
    timer.innerText=seconds--;
    timerButton.innerText='play'
    if(seconds<0){
        timerButton.innerText='Restart'
        seconds=30;
        numRandom.classList.add('d-none');
        userInputContainer.classList.remove('d-none');
        clearInterval(interval);
    };
};
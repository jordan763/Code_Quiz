var startBtn = document.querySelector('.button')
var timer = document.querySelector('.timer')
var questionBox = document.querySelector('.questionBox')
var gone = document.querySelector('#button')




// // Countdown
// var count = 100
//   function time() {
//     setInterval(function() {
//         if (count <= 0) {
//             clearInterval(count = 1)
//         }
//         count--;
//     timer.textContent =  count + 'seconds';
//     }, 1000);
//     gone.textContent = '';
    
// }
// startBtn.addEventListener('click', time)


askquestion = [{
    prompt : 'What HTML element do you put Javascript in? a:p tags b: h1 tags c: script tags',
   
    correctAnswer: "c"
  },
{
  prompt: 'What is Javascript used for? a: Weightlifting b: Coding c: Skydiving'
  ,
  correctAnswer: "a"
},
{
  prompt: 'How hard is it to use Javascript? a: Easy b: Hard c: Just give up',
  correctAnswer: "c"
}
];

var result = 0;

for(var i = 0; i < askquestion.length; i++){
    var userInput = window.prompt(askquestion[i].prompt);
    if(userInput === askquestion[i].correctAnswer){
         result++;
         alert("Right");
    } else {
         alert("Wrong");
    }
}
alert("you got " + result + "out of" + askquestion.length);



let currentQuestion=0;

let userAnswers=[];

function loadQuestion(){

document.getElementById("question").innerHTML=
(currentQuestion+1)+". "+questions[currentQuestion].question;

let html="";

questions[currentQuestion].options.forEach((option,index)=>{

html+=`
<p>
<label>
<input type="radio"
name="option"
value="${index}">
${option}
</label>
</p>
`;

});

document.getElementById("options").innerHTML=html;

}

function nextQuestion(){

saveAnswer();

if(currentQuestion<questions.length-1){

currentQuestion++;

loadQuestion();

}

}

function previousQuestion(){

saveAnswer();

if(currentQuestion>0){

currentQuestion--;

loadQuestion();

}

}

function saveAnswer(){

let selected=document.querySelector('input[name="option"]:checked');

if(selected){

userAnswers[currentQuestion]=Number(selected.value);

}

}

function submitQuiz(){

saveAnswer();

let score=0;

questions.forEach((q,index)=>{

if(userAnswers[index]==q.answer){

score++;

}

});

localStorage.setItem("score",score);

localStorage.setItem("total",questions.length);

window.location="result.html";

}

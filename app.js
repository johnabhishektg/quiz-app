const quizData = [{
        question:"What is capital of India?",
        a:"Kolkata", 
        b:"Surat", 
        c:"Delhi", 
        d:"Mumbai", 
        answer:"c"
    },{
        question:"What is the capital of Thailand?",
        a:"Lampang",  
        b:"Phuket", 
        c:"Ayutthaya",
        d:"Bangkok", 
        answer: "d" 

    },{
        question:"What is the capital of Gujarat",
        a:"Surat", 
        b:"Vadodara", 
        c:"Gandhinagar", 
        d:"Rajkot",
        answer: "c"    
    },{
        question:"Who found America",
        a:"Christopher Columbus", 
        b:"Leif Erikson", 
        c:"George Washington", 
        d:"Gavin Menzies",
        answer: "a"    
    },{
        question:"Who is the founder of Bitcoin",
        a:"Vitalik Buterin", 
        b:"Satoshi Nakamoto", 
        c:"Gary Tan", 
        d:"Tyler Winklevoss",
        answer: "b"    
    }
]

const a = document.getElementById('a_text');
const b = document.getElementById('b_text');
const c = document.getElementById('c_text');
const d = document.getElementById('d_text');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const button = document.getElementById('btn');
const quiz = document.getElementById('quiz');

let currentQuestion  = 0;
let score  = 0;


loadQuiz();

function loadQuiz(){
    getDeselected();
    let currentQuiz = quizData[currentQuestion];
    questionEl.innerText = currentQuiz.question;
    
    a.innerText = currentQuiz.a;
    b.innerText = currentQuiz.b;
    c.innerText = currentQuiz.c;
    d.innerText = currentQuiz.d;
}

function getSelected(){
    answerEls.forEach(answerEl => {
         if(answerEl.checked){
             answer = answerEl.id;
         }
    });

}
console.log(answerEls);
function getDeselected(){
    answerEls.forEach(answerEl =>{
        answerEl.checked = false;              
    });   
}

button.addEventListener('click', () =>{
    
    getSelected();
    
    if (answer === quizData[currentQuestion].answer) {
        score++;     
    }

    currentQuestion++;
    if(currentQuestion < quizData.length){
        loadQuiz();
    }
    else{
        if(score===currentQuestion){
            quiz.innerHTML = `<h1> Brilliant! <h1>
            <p>you have scored ${score} out of ${currentQuestion}!<p>`
        }
        if(score<currentQuestion){
            quiz.innerHTML = `<h1> Try Again <h1>
            <p>you've scored ${score} out of ${currentQuestion} <p>
            <button onclick='location.reload()'>Reload</button>`
        }
    }

}); 

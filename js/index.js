const ANSWER_1 = 4;
const ANSWER_2 = -2;
const ANSWER_3 = 1;
const ANSWER_4 = 6;
const ANSWER_5 = 8;

let getAnswers = document.querySelector('.button-send');
let resultTest = document.querySelector('.result');

getAnswers.addEventListener('click', correctAnswers)

function correctAnswers() {
    let mistakes = 0;
    let result = 0;

    let question_1 = document.getElementById('q1').value;
    if (question_1 == ''){
        alert('Заполите все поля!!!');
        return;
    }
    question_1 == ANSWER_1 ? result++ : mistakes++ ;

    let question_2 = document.getElementById('q2').value;
    if (question_2 == ''){
        alert('Заполите все поля!!!');
        return;
    }
    question_2 == ANSWER_2 ? result++ : mistakes++ ;

    let question_3 = document.getElementById('q3').value;
    if (question_3 == ''){
        alert('Заполите все поля!!!');
        return;
    }
    question_3 == ANSWER_3 ? result++ : mistakes++ ;

    let question_4 = document.getElementById('q4').value;
    if (question_4 == ''){
        alert('Заполите все поля!!!');
        return;
    }
    question_4 == ANSWER_4 ? result++ : mistakes++ ;

    let question_5 = document.getElementById('q5').value;
    if (question_5 == ''){
        alert('Заполите все поля!!!');
        return;
    }
    question_5 == ANSWER_5 ? result++ : mistakes++ ;

    let resultInner = `Правильных ответов : ${result} , неправельных : ${mistakes} `;
    resultTest.innerHTML = resultInner;
}
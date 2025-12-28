const frontendQuiz = [
  {
    question: "Что такое HTML?",
    answers: [
      "Язык программирования для серверной части",
      "База данных для хранения информации",
      "Язык разметки для создания структуры веб-страниц",
      "Фреймворк для стилизации страниц"
    ],
    correct: 2
  },
  {
    question: "Для чего используется CSS?",
    answers: [
      "Для программирования логики сайта",
      "Для стилизации и оформления HTML-элементов",
      "Для хранения пользовательских данных",
      "Для создания анимаций на странице"
    ],
    correct: 1
  },
  {
    question: "Что такое DOM?",
    answers: [
      "Метод шифрования данных",
      "Способ хранения cookies",
      "База данных в браузере",
      "Объектная модель документа, представление HTML в виде дерева узлов"
    ],
    correct: 3
  },
  {
    question: "Что такое React?",
    answers: [
      "JavaScript-библиотека для создания пользовательских интерфейсов",
      "Язык программирования",
      "База данных",
      "Операционная система"
    ],
    correct: 0
  },
  {
    question: "Что такое компонент в React?",
    answers: [
      "Переиспользуемый UI-элемент с собственной логикой",
      "Сервер для обработки запросов",
      "Переменная для хранения состояния",
      "Метод асинхронных запросов"
    ],
    correct: 0
  },
  {
    question: "Что такое состояние (state) в React?",
    answers: [
      "Глобальная переменная",
      "Внешний CSS-файл",
      "Название функции",
      "Внутренние данные компонента, которые могут изменяться"
    ],
    correct: 3
  },
  {
    question: "Чем let отличается от var?",
    answers: [
      "let работает медленнее",
      "let нельзя переопределять",
      "let имеет блочную область видимости, var - функциональную",
      "let доступен только в функциях"
    ],
    correct: 2
  },
  {
    question: "Что такое замыкание (closure)?",
    answers: [
      "Тип HTML-тега",
      "Метод оптимизации кода",
      "Способ закрыть браузер",
      "Функция, запоминающая свое лексическое окружение"
    ],
    correct: 3
  },
  {
    question: "Что такое Flexbox?",
    answers: [
      "CSS-модуль для расположения элементов в контейнере",
      "JavaScript-библиотека",
      "Новый язык программирования",
      "Тип базы данных"
    ],
    correct: 0
  },
  {
    question: "Что такое Grid layout?",
    answers: [
      "Метод верстки таблицами",
      "JavaScript-фреймворк",
      "Система для работы с изображениями",
      "CSS-система для создания двумерных сеточных макетов"
    ],
    correct: 3
  },
  {
    question: "Что такое API?",
    answers: [
      "Метод стилизации",
      "Язык программирования",
      "Тип базы данных",
      "Интерфейс для взаимодействия между программными компонентами"
    ],
    correct: 3
  },
  {
    question: "Что такое promise в JavaScript?",
    answers: [
      "Метод создания циклов",
      "Тип HTML-элемента",
      "Способ объявления переменных",
      "Объект, представляющий результат асинхронной операции"
    ],
    correct: 3
  },
  {
    question: "Что такое CORS?",
    answers: [
      "Механизм безопасности, ограничивающий кросс-доменные запросы",
      "Язык программирования",
      "Фреймворк для React",
      "Метод кэширования"
    ],
    correct: 0
  },
  {
    question: "Что такое responsive design?",
    answers: [
      "Способ программирования",
      "Метод тестирования",
      "Дизайн для мобильных приложений",
      "Подход, при котором сайт адаптируется под разные размеры экранов"
    ],
    correct: 3
  },
  {
    question: "Что такое Virtual DOM?",
    answers: [
      "Метод рендеринга",
      "Настоящий DOM-дерево",
      "База данных в браузере",
      "Легковесная копия реального DOM для оптимизации"
    ],
    correct: 3
  }
];
const submitBtn = document.querySelector("[data-submit-question]")
const questionP = document.querySelector("[data-question]")
const youScoreP = document.querySelector(".youScore")
const highScoreP = document.querySelector(".highScore")
const answerRadio = document.querySelectorAll(".answer_radio")
const answerLabel = document.querySelectorAll(".answer_label")
let currentIndex = 0
let score = 0
let highScore = JSON.parse(localStorage.getItem("highScore")) || 0

const setScoreInLocale = () =>{
  if (score>=highScore){
  highScore = score + 10
  localStorage.setItem("highScore",JSON.stringify(highScore-10))
}
}
const answerWrap = document.querySelector(".answer")
const selectedRadio = document.querySelector('.answer_radio:checked');

function getCurrentLabelText() {
    const selectedRadio = document.querySelector('.answer_radio:checked');
    if (!selectedRadio) return null;
    const label = document.querySelector(`label[for="${selectedRadio.id}"]`);
    return label.textContent;
}


const renderQuestion = ()=>{
  answerWrap.style.display = "grid"
  submitBtn.textContent = "Ответить"
  for(let i = 0; i<answerLabel.length;i++){
    answerLabel[i].textContent = frontendQuiz[currentIndex].answers[i]
  }
  questionP.textContent = frontendQuiz[currentIndex].question
}

const scoreNew = ()=>{
  youScoreP.textContent = `Ваш счет: ${score} баллов`
  highScoreP.textContent = `Ваш рекорд: ${highScore} баллов`
  
}
const submitWrap = document.querySelector(".submit_wrap")
submitBtn.addEventListener("click",()=>{
  if(getCurrentLabelText().toLowerCase().trim() == frontendQuiz[currentIndex].answers[frontendQuiz[currentIndex].correct].toLowerCase().trim()){
    currentIndex++
    if(score==highScore){
      highScore = 10
    }
    score+=10
    scoreNew()
    setScoreInLocale()
    renderQuestion()
  }else{
    currentIndex=0
    score = 0
    scoreNew()
    renderQuestion()
  }
})
const modal = document.querySelector(".modal_wrapper")
const closeModalBtn = document.querySelectorAll(".close_modal")
const openBtn = document.querySelector(".help_btn")
const wrap = document.querySelector(".wrap")
for (let i = 0;i<closeModalBtn.length;i++){
    closeModalBtn[i].addEventListener('click',()=>{
        modal.style.display = "none"
        wrap.style.display = "block"
    })
    openBtn.addEventListener("click",()=>{
        modal.style.display = "block"
        wrap.style.display = "none"
    })
}
renderQuestion()
scoreNew()
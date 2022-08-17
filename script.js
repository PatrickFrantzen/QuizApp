let questions = [

    {
        "quiz": [
            {
                "question": "Wie viele Stunden hat ein Tag?",
                "answer_1": "23",
                "answer_2": "12",
                "answer_3": "24",
                "answer_4": "Nicht genug",
                "right_answer": 3
            },

            {
                "question": "In welcher Einheit wird für gewöhnlich die Geschwindigkeit angegeben?",
                "answer_1": "km/h",
                "answer_2": "Meilen pro Kalorie",
                "answer_3": "PS",
                "answer_4": "Fahrenheit",
                "right_answer": 1
            },

            {
                "question": "Henriettes Vater hat vier Töchter. Lisa, Lysa und Ljsa. Wie heißt die vierte Tochter?",
                "answer_1": "Ulrike",
                "answer_2": "Peter",
                "answer_3": "Lisa-Marie",
                "answer_4": "Henriette",
                "right_answer": 4
            },

            {
                "question": "Ein berühmtes Märchen heißt:",
                "answer_1": "Hänsel und Gretel",
                "answer_2": "Heiko und der böse Wolf",
                "answer_3": "Die Königin auf der Erbse",
                "answer_4": "Blaukäppchen",
                "right_answer": 1
            },

            {
                "question": "Wenn der Dachstuhl fertig ist, feiert man...",
                "answer_1": "Taufe.",
                "answer_2": "Nikolaus-Tag.",
                "answer_3": "Richtfest.",
                "answer_4": "gar nicht.",
                "right_answer": 3
            },

            {
                "question": "Welcher Begriff beschreibt sowohl ein Tier als auch ein Lebensmittel",
                "answer_1": "Bakterie",
                "answer_2": "Schimmel",
                "answer_3": "Virus",
                "answer_4": "Prion",
                "right_answer": 2
            },

            {
                "question": "Es ist nicht alles Gold das...",
                "answer_1": "schimmert.",
                "answer_2": "strahlt.",
                "answer_3": "scheint.",
                "answer_4": "glänzt.",
                "right_answer": 4
            }
        ],
    },


    {
        "quiz": [
            {
                "question": "Per Anhalter durch die ...?",
                "answer_1": "Kanalisation",
                "answer_2": "Galaxis",
                "answer_3": "Steuererklärung",
                "answer_4": "Fortbildung",
                "right_answer": 2
            },

            {
                "question": "Anakin Skywalker ist der Vater von...?",
                "answer_1": "Luke und Leia",
                "answer_2": "Frank Walter Steinmeier",
                "answer_3": "Tom Cruise",
                "answer_4": "Darth Vader",
                "right_answer": 1
            },

            {
                "question": "Wohin muss Frodo den Einen Ring tragen?",
                "answer_1": "Zurück zum Auenland",
                "answer_2": "Zum Drachen Smaug",
                "answer_3": "Nach Gondor",
                "answer_4": "Nach Mordor",
                "right_answer": 4
            },

            {
                "question": "Ein berühmter Spruch aus Indianer Jones lautet...",
                "answer_1": "Der Becher eines Bauern.",
                "answer_2": "Hör auf mich, dann lebst du länger!",
                "answer_3": "Ich hab auf Sie gewartet, Mr. Bond",
                "answer_4": "Nein, ich bin dein Vater!",
                "right_answer": 2
            },

            {
                "question": "Wie trinkt James Bond seinen Gin?",
                "answer_1": "Geschüttelt, nicht gerührt.",
                "answer_2": "Mit Zitrone und Gurke.",
                "answer_3": "Er trinkt Martini.",
                "answer_4": "Auf Eis.",
                "right_answer": 3
            },

            {
                "question": "Wo wohnte Harry Potter im ersten Buch?",
                "answer_1": "Unter der Treppe.",
                "answer_2": "Auf dem Dachboden.",
                "answer_3": "Im Keller.",
                "answer_4": "Bei Ron und Hermine.",
                "right_answer": 1
            },

            {
                "question": "Wofür war Dr. House nicht bekannt?",
                "answer_1": "Für sein Fachwissen.",
                "answer_2": "Für seine Tierliebe.",
                "answer_3": "Für seine Tablettensucht.",
                "answer_4": "Für seinen Sarkasmus.",
                "right_answer": 2
            }
        ],
    },
];

let j = 0;
let numOfRightAnswers = 0;
let audio_success = new Audio('audio/success.mp3');
let audio_fail = new Audio('audio/wrong_answer.mp3');

function render() {
    document.getElementById('card').innerHTML = createStart();
    document.getElementById('next-button').classList.add('d-none');
}

function createStart() {
    return `
    <div id="startscreen" class="card-body startscreen-design">
        <div class=inner-startscreen>
        <span><b>Willkommen zum Quiz!</b></span>
        <span class="text-size-medium"><b>Wie viele Punkte wirst du erlangen?</b></span>
        <span class="text-size-small">Starte zum Aufwärmen mit den allgemeinen Fragen</span>
        <span class="text-size-small">oder gehe direkt zur Filmkategorie</span>
        </div>
        <div class="inner-button">
        <button onclick="init()" type="button" class="btn btn-primary">Jetzt starten!</button>
        </div>
    </div>
`
}

function init() {
    let i = 0;
    document.getElementById('card').innerHTML = createQuestionCard(i, j);
    document.getElementById('next-button').classList.remove('d-none');
    document.getElementById('next-button').innerHTML = createNextButton(i);
    createPercentage(i);
    allQuestions(i);
}

function initMovies() {
    let i = 1;
    document.getElementById('card').innerHTML = createQuestionCard(i, j);
    document.getElementById('next-button').classList.remove('d-none');
    document.getElementById('next-button').innerHTML = createNextButton(i);
    createPercentage(i);
    allQuestions(i);
}


function createQuestionCard(i, j) {
    return `
    <div id="question${i}" class="card-body card-question card-body-bottomline">
    <span>${questions[i].quiz[j]['question']}</span> 
    </div>

    <div id="answer_1${i}" class="card-body card-answer card-body-bottomline card-hover" onclick="answer(1, ${i})">
    <span>${questions[i].quiz[j]['answer_1']}</span> 
    </div>

    <div id="answer_2${i}" class="card-body card-answer card-body-bottomline card-hover" onclick="answer(2, ${i})">
    <span>${questions[i].quiz[j]['answer_2']}</span> 
    </div>

    <div id="answer_3${i}" class="card-body card-answer card-body-bottomline card-hover" onclick="answer(3, ${i})">
    <span>${questions[i].quiz[j]['answer_3']}</span> 
    </div>

    <div id="answer_4${i}" class="card-body card-answer card-hover" onclick="answer(4, ${i})">
    <span>${questions[i].quiz[j]['answer_4']}</span> 
    </div>
    <div class="card-footer">
    <span><b id="actualQuestion">${j + 1}</b> von <b id="allQuestions"></b> Fragen</span>
    <div class="progress">
    <div id="progress-bar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
        style="width: 75%"></div>
</div>
    </div>
    `
}

function createNextButton(i) {
    return `
    <button type="button" id="next" class="btn btn-outline-secondary" onclick="nextQuestion(${i})" disabled>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
    </svg>
    </button>
    
    `
}

function allQuestions(i) {
    document.getElementById('allQuestions').innerHTML = questions[i].quiz.length;
}

function answer(selection, i) {
    let idOfRightAnswer = `answer_${questions[i].quiz[j]['right_answer']}${i}`;
    if (selection == questions[i].quiz[j]['right_answer']) {
        document.getElementById(`answer_${selection}${i}`).classList.add('success');
        numOfRightAnswers++;
        audio_success.play();
    } else {
        document.getElementById(`answer_${selection}${i}`).classList.add('false');
        document.getElementById(idOfRightAnswer).classList.add('success');
        audio_fail.play();
    }
    document.getElementById('next').disabled = false;
    disableAnswers(i);
}

function nextQuestion(i) {
    j++;
    finished(i);
}

function finished(i) {
    if (j > 6) {
        document.getElementById('card').innerHTML = createEndCard(i);
        j = -1;
        numOfRightAnswers = 0;
    } else {
        if (i == 0) {
            init(i);
        document.getElementById('next').disabled = true;
        } else {
            initMovies(i)
            document.getElementById('next').disabled = true;
        }
    }
}

function createEndCard(i) {
    return `
        <div id="endscreen" class="card-body endscreen-design">
            <div class="outer-endscreen">    
                <img src="img/brain result.png">
                <div class="inner-endscreen">
                    <span class="text-size-large"><b>Glückwunsch!</b></span>
                    <span class="text-size-medium"><b>Du hast das Quiz beendet!</b></span>
                    <spanclass="text-size-medium"><b>Deine Punktzahl beträgt:</b></span><br>
                    <span class="number text-size-medium"><b> ${numOfRightAnswers} / ${questions[i].quiz.length}</b></span>
                    <br>
                    <br>
                    <span class="text-size-small">Noch einmal probieren?</span> 
                    <span class="text-size-small">Kein Problem, klicke auf den Pfeil rechts</span>
                </div>
            </div>
            <div class="endscreen-tropy">
                <img src="img/tropy.png">
        </div>
    `
}

function createPercentage(i) {
    let percentage = j / questions[i].quiz.length;
    percentage = Math.round(percentage * 100);
    document.getElementById('progress-bar').innerHTML = `${percentage} % `;
    document.getElementById('progress-bar').style.width = `${percentage}%`;
}

function disableAnswers(i) {
    for (let j = 1; j <= 4; j++) {
        document.getElementById(`answer_${j}${i}`).classList.add('pointer-none');
    }
}
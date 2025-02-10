let selectedUnit = null;
let translationDirection = "en-ru";
let selectedMode = "multiple-choice";
let usedWords = new Set();
let currentWord = null;
let countAnswerOptions = 10;
let stats = {
    correct: 0,
    incorrect: 0,
    total: 0,
    remained: 0
};

function populateUnitSelect() {
    const unitSelect = document.getElementById("unit-select");
    let countAllWords = 0;
    dataWords.forEach((unitData, idx) => {
        const unitName = unitData.name;
        let countWords = unitData.data.length;
        countAllWords += countWords
        const option = document.createElement("option");
        option.value = idx;
        let name = ucFirst(replaceSeparate(unitName))
        option.textContent = `${name} | count words: ${countWords}`;
        unitSelect.appendChild(option);
    });

    const option = document.createElement("option");
    option.value = 'all';
    option.textContent = `All Units | count words: ${countAllWords}`;
    option.defaultSelected = true;
    unitSelect.prepend(option);
}

function getUnitData(selectedUnits) {
    if (selectedUnits.includes("all")) {
        return dataWords.flatMap(unitData => {
            stats.total += unitData.data.length
            stats.remained = stats.total;
            logCounterWords();
            return unitData.data;
        });
    }

    return selectedUnits.flatMap(unit => {
        if (dataWords[unit]) {
            stats.total += dataWords[unit].data.length;
            stats.remained = stats.total;
            logCounterWords();
            return dataWords[unit].data;
        }
        return [];
    });
}

function getRandomWord(unitData) {
    if (usedWords.size === unitData.length) {
        document.getElementById("question-container")
            .innerHTML = "<p>You have completed all the words! Great job.</p><p class='total'>Total: "
            + stats.total + "</p><p class='correct'>Correct: "
            + stats.correct + "</p><p class='incorrect'>Incorrect: "
            + stats.incorrect + "</p><button id=\"reload-button\">Close</button>";
        return null;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * unitData.length);
    } while (usedWords.has(randomIndex));

    usedWords.add(randomIndex);
    return unitData[randomIndex];
}

function showNextWord(unitData) {
    const wordObject = getRandomWord(unitData);
    if (!wordObject) return;
    currentWord = currentWordObject(wordObject);

    document.getElementById("word-display").innerHTML = "How is the word translated ?" +
        "<p><span class='current-world'>" + currentWord.question + "</span> <sup class='part_of_speech'>" + currentWord.part_of_speech + "</sup></p>";

    if (selectedMode === "multiple-choice") {
        const options = getAnswerOptions(currentWord.correctAnswer, unitData);
        const optionsContainer = document.getElementById("options-container");
        optionsContainer.innerHTML = "";

        options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => checkAnswer(option, unitData));
            optionsContainer.appendChild(button);
        });

        document.getElementById("manual-input").style.display = "none";
        optionsContainer.style.display = "block";
    } else {
        document.getElementById("manual-input").style.display = "block";
        document.getElementById("options-container").style.display = "none";
    }
}


function currentWordObject(wordObject) {
    return translationDirection === "en-ru"
        ? {
            question: wordObject.en,
            correctAnswer: wordObject.ru,
            part_of_speech: wordObject.part_of_speech,
            pronunciation: wordObject.pronunciation
        }
        : {
            question: wordObject.ru,
            correctAnswer: wordObject.en,
            part_of_speech: wordObject.part_of_speech,
            pronunciation: wordObject.pronunciation
        };
}

function getAnswerOptions(correctAnswer, unitData) {
    const options = new Set();
    options.add(correctAnswer);

    while (options.size < Math.min(countAnswerOptions, unitData.length)) {
        const randomIndex = Math.floor(Math.random() * unitData.length);
        const randomWord = translationDirection === "en-ru"
            ? unitData[randomIndex].ru
            : unitData[randomIndex].en;
        options.add(randomWord);
    }
    return Array.from(options).sort(() => Math.random() - 0.5);
}

function isValidAnswer(selectedAnswer) {
    let answer = replaceSeparate(selectedAnswer.trim().toLowerCase(), /[-\s]+/g);
    let correctAnswer = replaceSeparate(currentWord.correctAnswer.trim().toLowerCase(), /[-\s]+/g);
    let isValid = false;

    if (answer === correctAnswer) {
        isValid = true;
    }

    if (correctAnswer.includes(answer)) {
        isValid = true;
    }
    return isValid;
}
function checkAnswer(selectedAnswer, unitData) {
    if (!currentWord) return;

    const resultDisplay = document.getElementById("result");
    const logList = document.getElementById("log-list");

    if (selectedAnswer.trim().length === 0) {
        resultDisplay.textContent = "Please enter a valid answer.";
        resultDisplay.style.color = "orange";
        return;
    }

    if (isValidAnswer(selectedAnswer)) {
        resultDisplay.textContent = "Right! Moving on to the next word.";
        resultDisplay.style.color = "green";

        setTimeout(function () {
            showNextWord(unitData)
        }, 100);

        setTimeout(function () {
            resultDisplay.textContent = "";
        }, 1000);

        const logItem = document.createElement("li");
        logItem.style.color = "green";

        logItem.textContent = `✔️ ${currentWord.question} → ${currentWord.correctAnswer}  ${currentWord.pronunciation}`;
        logList.prepend(logItem);
        stats.correct += 1;

    } else {
        resultDisplay.textContent = `Mistake! The correct answer is: "${currentWord.correctAnswer}".`;
        resultDisplay.style.color = "red";

        document.getElementById("options-container").style.display = "none";
        document.getElementById("manual-input").style.display = "none";

        const continueButton = document.createElement("button");
        continueButton.textContent = "Continue";
        continueButton.id = "continue-button";
        continueButton.addEventListener("click", () => {
            continueButton.remove();
            resultDisplay.textContent = "";
            showNextWord(unitData);
        });
        document.getElementById("question-container").appendChild(continueButton);
        stats.incorrect += 1;

        const logItem = document.createElement("li");
        logItem.style.color = "red";
        logItem.textContent = `❌ ${currentWord.question} → ${selectedAnswer} (true: ${currentWord.correctAnswer})  ${currentWord.pronunciation}`;
        logList.prepend(logItem);
    }
    stats.remained -= 1;

    logCounterWords();
}

document.getElementById("start-button")
    .addEventListener("click", () => {
        let table = document.getElementById("table-words");
        let oldTbody = table.querySelector("tbody");
        if (oldTbody) {
            oldTbody.remove();
        }
        let twc = document.getElementById('table-words-container');
        twc.classList.add('display-none')

        let lc = document.getElementById('log-container');
        lc.classList.remove('display-none')

        selectedUnit = document.getElementById("unit-select");
        translationDirection = document.getElementById("direction-select").value;
        selectedMode = document.getElementById("mode-select").value;
        const selectedOptions = Array.from(selectedUnit.selectedOptions).map(option => option.value);

        if (!selectedOptions) {
            alert("Please select a unit!");
            return;
        }

        const unitData = getUnitData(selectedOptions);
        if (!unitData || unitData.length === 0) {
            alert("There is no data for the selected unit.");
            return;
        }

        usedWords.clear();
        document.getElementById("settings").style.display = "none";
        document.getElementById("question-container").style.display = "block";

        showNextWord(unitData);

        if (selectedMode === "manual-input") {
            const submitButton = document.getElementById("submit-button");
            const userInputField = document.getElementById("user-input");
            const handleAnswer = () => {
                const userInput = userInputField.value;
                checkAnswer(userInput, unitData);
                userInputField.value = "";
            };

            submitButton.addEventListener("click", handleAnswer);
            userInputField.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    handleAnswer();
                }
            });
        }
    });

document.getElementById("unit-select")
    .addEventListener("change", function () {

        let twc = document.getElementById('table-words-container');
        twc.classList.remove('display-none')

        let selectedUnit = document.getElementById("unit-select");
        let selectedOptions = Array.from(selectedUnit.selectedOptions).map(option => option.value);

        let wordsTable = selectedOptions.flatMap(unit => dataWords[unit]?.data || []);

        if (wordsTable.length === 0) return;

        let table = document.getElementById("table-words");

        let oldTbody = table.querySelector("tbody");
        if (oldTbody) {
            oldTbody.remove();
        }
        let tbody = document.createElement("tbody");

        wordsTable.sort((a, b) => a.en.localeCompare(b.en));

        wordsTable.forEach(wordData => {
            let row = document.createElement("tr");

            let wordEn = document.createElement("td");
            wordEn.className = 'table-title';
            wordEn.textContent = wordData.en;

            let wordPos = document.createElement("td");
            wordPos.className = 'table-title';
            wordPos.textContent = wordData.part_of_speech;

            let wordP = document.createElement("td");
            wordP.textContent = wordData.pronunciation;
            wordP.className = 'table-title';
            wordP.title = wordData.pronunciation;

            let wordRu = document.createElement("td");
            wordRu.className = 'table-title';
            wordRu.textContent = wordData.ru;

            row.appendChild(wordEn);
            row.appendChild(wordPos);
            row.appendChild(wordP);
            row.appendChild(wordRu);

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
    });

document.addEventListener("click", function (event) {
    if (event.target && event.target.id === "reload-button") {
        location.reload();
    }
});

function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function replaceSeparate(str, pattern = "/-/g") {
    return str.replace(pattern, " ");
}

function logCounterWords() {
    document.getElementById('total').textContent = stats.total;
    document.getElementById('remained').textContent = stats.remained;
    document.getElementById('correct').textContent = stats.correct;
    document.getElementById('incorrect').textContent = stats.incorrect;
}

populateUnitSelect();




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
    dataVerbs.forEach((unitData, idx) => {
        const unitName = unitData.name;
        console.log(unitData)
        let countWords = unitData.data.length;
        countAllWords += countWords
        const option = document.createElement("option");
        option.value = idx;
        let name = ucFirst(replaceSeparate(unitName))
        option.textContent = `${name} | count : ${countWords}`;
        unitSelect.appendChild(option);
    });

    const option = document.createElement("option");
    option.value = 'all';
    option.textContent = `All | count: ${countAllWords}`;
    option.defaultSelected = true;
    unitSelect.prepend(option);
}

function getUnitData(selectedUnits) {
    if (selectedUnits.includes("all")) {
        return dataVerbs.flatMap(unitData => {
            stats.total += unitData.data.length
            stats.remained = stats.total;
            logCounterWords();
            return unitData.data;
        });
    }

    return selectedUnits.flatMap(unit => {
        if (dataVerbs[unit]) {
            stats.total += dataVerbs[unit].data.length;
            stats.remained = stats.total;
            logCounterWords();
            return dataVerbs[unit].data;
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
        "<p><span class='current-world'>" + currentWord.question + "</sup></p>";

    document.getElementById("manual-input").style.display = "block";
    document.getElementById("options-container").style.display = "none";
}


function currentWordObject(wordObject) {
    return {
        question: wordObject.translation,
        correctAnswer: [
            wordObject.infinitive,
            wordObject.past,
            wordObject.past_participle
        ],
    };
}

function isValidAnswer(selectedAnswer) {
    let answerArray = selectedAnswer.split(",").map(item => item.toLowerCase().trim()).slice(0, 3);

    let isValid = false;

    if (arraysEqualUnordered(answerArray, currentWord.correctAnswer)) {
        isValid = true;
    }
    return isValid;
}


function arraysEqualUnordered(arr1, arr2) {
    return arr1.length === arr2.length &&
        [...arr1].sort().every((value, index) => value === [...arr2].sort()[index]);
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

        logItem.textContent = `✔️ ${currentWord.question} → ${currentWord.correctAnswer}`;
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
        logItem.textContent = `❌ ${currentWord.question} → ${selectedAnswer} (true: ${currentWord.correctAnswer})`;
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
    });

document.getElementById("unit-select")
    .addEventListener("change", function () {

        let twc = document.getElementById('table-words-container');
        twc.classList.remove('display-none')

        let selectedUnit = document.getElementById("unit-select");
        let selectedOptions = Array.from(selectedUnit.selectedOptions).map(option => option.value);

        let wordsTable = selectedOptions.flatMap(unit => dataVerbs[unit]?.data || []);

        if (wordsTable.length === 0) return;

        let table = document.getElementById("table-words");

        let oldTbody = table.querySelector("tbody");
        if (oldTbody) {
            oldTbody.remove();
        }
        let tbody = document.createElement("tbody");

        wordsTable.sort((a, b) => a.infinitive.localeCompare(b.infinitive));

        wordsTable.forEach(wordData => {
            let row = document.createElement("tr");

            let wordEn = document.createElement("td");
            wordEn.textContent = wordData.infinitive;

            let wordPos = document.createElement("td");
            wordPos.textContent = wordData.past;

            let wordP = document.createElement("td");
            wordP.textContent = wordData.past_participle;

            let wordRu = document.createElement("td");
            wordRu.textContent = wordData.translation;

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
function analyze() {
    let name = document.getElementById("name").value;
    let alder = document.getElementById("age").value;
    if (name !== "" && age !== "") {
        document.getElementById("outputOppgaveEn").innerHTML = `Your name is ${name}, age ${alder}.`;
    } else {
        document.getElementById("outputOppgaveEn").innerHTML = `Somethings wrong, please try again.`;
    }
}

function clearAnalyze() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("outputOppgaveEn").innerHTML = "";
}

function calculateFarenheit() {
    let farenheit = document.getElementById("farenheit").value;
    celcius = (5 / 9) * (farenheit - 32);
    document.getElementById("outputFarenheit").innerHTML = `${farenheit} farenheit tilsvarer ${celcius.toFixed(1)} celcius.`;
}

function clearCalculateFarenheit() {
    document.getElementById("farenheit").value = "";
    document.getElementById("outputFarenheit").innerHTML = "<br>";
}

function calculatePlus() {
    let first = document.getElementById("calculatorDigitOne").value;
    let second = document.getElementById("calculatorDigitTwo").value;
    let answer = Number(first) + Number(second);
    if (first !== "" && second !== "") {
        document.getElementById("outputOppgaveTre").innerHTML = `Addition: ${first} +  ${second} =  ${answer}`;
    } else {
        document.getElementById("outputOppgaveTre").innerHTML = `Fields must have numbers`;
    }
}

function calculateMinus() {
    let first = document.getElementById("calculatorDigitOne").value;
    let second = document.getElementById("calculatorDigitTwo").value;
    let answer = Number(first) - Number(second);
    if (first !== "" && second !== "") {
        document.getElementById("outputOppgaveTre").innerHTML = `Subtraction: ${first} -  ${second} =  ${answer}`;
    } else {
        document.getElementById("outputOppgaveTre").innerHTML = `Fields must have numbers`;
    }
}

function calculateMultiplication() {
    let first = document.getElementById("calculatorDigitOne").value;
    let second = document.getElementById("calculatorDigitTwo").value;
    let answer = Number(first) * Number(second);
    if (first !== "" && second !== "") {
        document.getElementById("outputOppgaveTre").innerHTML = `Multiplication: ${first} x  ${second} =  ${answer}`;
    } else {
        document.getElementById("outputOppgaveTre").innerHTML = `Fields must have numbers`;
    }}

function calculateDivision() {
    let first = document.getElementById("calculatorDigitOne").value;
    let second = document.getElementById("calculatorDigitTwo").value;
    let answer = Number(first) / Number(second);
    if (first !== "" && second !== "") {
        document.getElementById("outputOppgaveTre").innerHTML = `Division: ${first} /  ${second} =  ${answer.toFixed(2)}`;
    } else {
        document.getElementById("outputOppgaveTre").innerHTML = `Fields must have numbers`;
    }}

function clearCalculation() {
    document.getElementById("calculatorDigitOne").value = "";
    document.getElementById("calculatorDigitTwo").value = "";
    document.getElementById("outputOppgaveTre").innerHTML = "<br>";
}
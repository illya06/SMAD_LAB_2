


//numbers = 0.03 0.24 0.33 0.33 0.38 0.63 0.79 0.55 0.34 0.14
let numbers = (document.getElementById('numbers').value)
    .split(" ")
    .map(Number)
    .filter(Boolean);

//Unique numbers from output
let uniqueNums = Array.from([...new Set(numbers)]);
uniqueNums.sort(function (a, b) { return a - b; })

//Number <-> frequency relation map
let numsFrequency = new Map();
uniqueNums.map(
    item => numsFrequency
        .set(item, numbers.filter(x => x == item).length)
);

let uniqueFrequencies = [];
numsFrequency.forEach((apearence, number) => {
    uniqueFrequencies.push(apearence);
});

let midStat = 0;
let dispersion = 0;
let stdDeviation = 0;

function main() {

    //trend
    calcTrend();

    //median
    calcMedian();

    //span
    calcSpan();

    // mid Statistical
    calcMidStatistical();

    //dispersion
    calcDispersion();

    //standardDeviation
    calcStandardDeviation();

    //correctedStandardDeviation
    calcCorrectedDispersion();

    //correctedStandardDeviation
    calcCorrectedStandardDeviation();

    //variation
    calcVariation();

    //calcInitialMoment
    calcInitialMomentOfK(3);

    //centralMoment
    calcCentralMomentOfK(3);

    //asymmetry
    calcAsymmetry();

    //excess
    calcExcess();
}

function calcExcess() {
    document.getElementById('excess').innerHTML =
        ` <kbd>${calcCentralMomentOfK(4, false) / calcInitialMomentOfK(4, false) - 3}</kbd>`;
}

function calcAsymmetry() {
    document.getElementById('asymmetry').innerHTML =
        ` <kbd>${calcCentralMomentOfK(3, false) / calcInitialMomentOfK(3, false)}</kbd>`;
}

function calcCentralMomentOfK(k, print = true) {
    let centralMomentOfK = 0;
    numsFrequency.forEach((apearence, number) => {
        centralMomentOfK += (Math.pow(number - midStat, k) * apearence) / numbers.length;
    });

    if (print) {
        document.getElementById('centralMoment').innerHTML = ` <kbd>${centralMomentOfK}</kbd>`;
    }
    return centralMomentOfK;
}

//pass a level you whant from a function
function calcInitialMomentOfK(k, print = true) {
    let initialMomentOfK = 0;
    numsFrequency.forEach((apearence, number) => {
        initialMomentOfK += (Math.pow(number, k) * apearence) / numbers.length;
    });

    if (print) {
        document.getElementById('initialMoment').innerHTML = ` <kbd>${initialMomentOfK}</kbd>`;
    }
    return initialMomentOfK;
}

function calcVariation() {
    document.getElementById('variation').innerHTML =
        ` <kbd>${stdDeviation / midStat}</kbd>`;
}

function calcCorrectedStandardDeviation() {
    document.getElementById('correctedStandardDeviation').innerHTML =
        ` <kbd>${stdDeviation * Math.sqrt((numbers.length / (numbers.length - 1)))}</kbd>`;
}

function calcCorrectedDispersion() {
    document.getElementById('correctedDispersion').innerHTML =
        ` <kbd>${dispersion * (numbers.length / (numbers.length - 1))}</kbd>`;
}

function calcStandardDeviation() {
    stdDeviation = Math.sqrt(dispersion);
    document.getElementById('standardDeviation').innerHTML =
        ` <kbd>${stdDeviation}</kbd>`;
}

function calcMidStatistical() {
    numsFrequency.forEach((apearence, number) => {
        midStat += (number * apearence) / numbers.length;
    });
    document.getElementById('midStatistical').innerHTML = ` <kbd>${midStat}</kbd>`;
}

function calcDispersion() {
    numsFrequency.forEach((apearence, number) => {
        dispersion += (Math.pow(number - midStat, 2) * apearence) / numbers.length;
    });
    document.getElementById('dispersion').innerHTML = ` <kbd>${dispersion}</kbd>`;
}

function calcTrend() {
    let max = 0;
    let trend = 0;
    numsFrequency.forEach((apearence, number) => {
        if (apearence > max) {
            max = apearence;
            trend = number;
        }
    });
    document.getElementById('trend').innerHTML = ` <kbd>${trend}</kbd>`;
}

function calcMedian() {
    if (uniqueNums.length % 2 == 0) {
        document.getElementById('median').innerHTML =
            ` <kbd>${(uniqueNums[uniqueNums.length / 2 - 1] + uniqueNums[uniqueNums.length / 2]) / 2}</kbd>`;
    } else {
        document.getElementById('median').innerHTML =
            ` <kbd>${uniqueNums[Math.round(uniqueNums.length / 2)]}</kbd>`;
    }
}

function calcSpan() {
    let max = numbers.reduce(function (a, b) {
        return Math.max(a, b);
    });
    let min = numbers.reduce(function (a, b) {
        return Math.min(a, b);
    });
    document.getElementById('span').innerHTML = ` <kbd>${min} - ${max}</kbd>`;
}





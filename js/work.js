


//numbers =  0.14 0.28 0.31 0.57 0.65 0.78 0.42 0.47 0.60 0.91 0.65 0.79 0.57 0.34 0.25 0.00 0.03 0.28 0.33 0.33 0.14 0.25 0.31 0.36 0.65 0.65 0.70 0.42 0.47 0.60
let numbers = (document.getElementById('numbers').value)
    .split(" ")
    .map(Number)
    .filter(Boolean);

//Sterjeet`s number
let r = 1 + 3.322 * Math.log10(numbers.length);

//extreemes
let minVal = Math.min(numbers);
let maxVal = Math.max(numbers);

//length of intervals
let len = (maxVal - minVal) / r;

//middle of interval <-> frequency - map
let intervalToFrequency = new Map();

for (let i = minVal; i < len * r; i += len) {
    let ammountInInterval = 0;
    numbers.forEach(num => {
        if(num >= i && num < i + len){
            ammountInInterval += 1;
        }
    })
    intervalToFrequency.set((i + i + len)/2, ammountInInterval);
}


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





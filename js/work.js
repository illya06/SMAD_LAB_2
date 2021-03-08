


//numbers =  0.14 0.28 0.31 0.57 0.65 0.78 0.42 0.47 0.60 0.91 0.65 0.79 0.57 0.34 0.25 0.00 0.03 0.28 0.33 0.33 0.14 0.25 0.31 0.36 0.65 0.65 0.70 0.42 0.47 0.60
var numbers = (document.getElementById('numbers').value)
    .split(" ")
    .map(Number)
    .filter(Boolean);

//Sterjeet`s number
var r = 1 + 3.322 * Math.log10(numbers.length);

//extreemes
var minVal = numbers.reduce(function (a, b) {
    return Math.min(a, b);
});
var maxVal = numbers.reduce(function (a, b) {
    return Math.max(a, b);
});

//length of intervals
var len = (maxVal - minVal) / r;

//middle of interval <-> frequency - map
var intervalToFrequency = new Map();


for (var i = minVal; i < len * r; i += len) {
    var ammountInInterval = 0;
    numbers.forEach(num => {
        if (i != len * r - minVal) {
            if (num >= i && num < i + len) {
                //alert(`${num} belongs to : ${i.toFixed(4)} - ${(i + len).toFixed(4)}`);
                ammountInInterval += 1;

            }
        } else {
            if (num >= i && num <= i + len){
                ammountInInterval += 1;
                //alert(`${num} belongs to : ${i.toFixed(4)} - ${(i + len).toFixed(4)}`);
            }
        }
    })
    intervalToFrequency.set([i, i + len], ammountInInterval);
}


var midStat = 0;
var dispersion = 0;
var stdDeviation = 0;

function calcExcess() {
    document.getElementById('excess').innerHTML =
        ` <kbd>${calcCentralMomentOfK(4, false) / calcInitialMomentOfK(4, false) - 3}</kbd>`;
}

function calcAsymmetry() {
    document.getElementById('asymmetry').innerHTML =
        ` <kbd>${calcCentralMomentOfK(3, false) / calcInitialMomentOfK(3, false)}</kbd>`;
}

function calcCentralMomentOfK(k, print = true) {
    var centralMomentOfK = 0;
    intervalToFrequency.forEach((frequency, interv) => {
        centralMomentOfK += (Math.pow(((interv[0] - interv[1]) / 2) - midStat, k) * frequency) / numbers.length;
    });

    if (print) {
        document.getElementById('centralMoment').innerHTML = ` <kbd>${centralMomentOfK}</kbd>`;
    }
    return centralMomentOfK;
}

//pass a level you whant from a function
function calcInitialMomentOfK(k, print = true) {
    var initialMomentOfK = 0;
    intervalToFrequency.forEach((frequency, interv) => {
        initialMomentOfK += (Math.pow(((interv[0] - interv[1]) / 2), k) * frequency) / numbers.length;
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
    intervalToFrequency.forEach((frequency, interv) => {
        midStat += (((interv[0] - interv[1]) / 2) * frequency) / numbers.length;
    });
    document.getElementById('midStatistical').innerHTML = ` <kbd>${midStat}</kbd>`;
}

function calcDispersion() {
    intervalToFrequency.forEach((frequency, interv) => {
        dispersion += (Math.pow(((interv[0] - interv[1]) / 2) - midStat, 2) * frequency) / numbers.length;
    });
    document.getElementById('dispersion').innerHTML = ` <kbd>${dispersion}</kbd>`;
}

function calcTrend() {
    var max = 0;
    var trend = 0;
    intervalToFrequency.forEach((apearence, number) => {
        if (apearence > max) {
            max = apearence;
            trend = number;
        }
    });
    document.getElementById('trend').innerHTML = ` <kbd>${trend}</kbd>`;
}

function calcMedian() {
    document.getElementById('median').innerHTML =
        ` <kbd> DUNNO </kbd>`;
}

function calcSpan() {
    document.getElementById('span').innerHTML = ` <kbd>${minVal} - ${maxVal}</kbd>`;
}





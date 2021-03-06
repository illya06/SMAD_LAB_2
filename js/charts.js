//---------
// CHARTS
//---------

let sum = 0;
let empiric_data = [];
[...uniqueFrequencies].forEach(val => {
    sum += val / numbers.length;
    empiric_data.push(sum);
})

sum = 0;
let cumulative_data = [];
[...uniqueFrequencies].forEach(val => {
    sum += val;
    cumulative_data.push(sum);
})

let rel_poli_data = [];
[...uniqueFrequencies].forEach(val => {
    rel_poli_data.push(val / numbers.length);
})

let text = [];
for (i = 0; i < uniqueNums.length; i++) {
    if (i == 0)
        text.push(`${uniqueNums[0]}-${uniqueNums[1]}`);
    else if (i == uniqueNums.length - 1)
        text.push(`${uniqueNums[uniqueNums.length - 1]}-infinity`);
    else
        text.push(`${uniqueNums[i]}-${uniqueNums[i + 1]}`);
}


//poligon
var poli = document.getElementById('poligon').getContext('2d');
var chart = new Chart(poli, {
    type: 'line',
    data: {
        labels: uniqueNums,
        datasets: [{
            label: 'Полігон частот',
            borderColor: 'black',
            data: uniqueFrequencies,
            lineTension: 0
        }],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


//poligon rel
var poli_rel = document.getElementById('poligon_rel').getContext('2d');
var chart = new Chart(poli_rel, {
    type: 'line',
    data: {
        labels: uniqueNums,
        datasets: [{
            label: 'Полігон частот (за відносними частотами)',
            borderColor: 'black',
            data: rel_poli_data,
            lineTension: 0
        }],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


//cumulative curve
var cum = document.getElementById('cumulative').getContext('2d');
var chart = new Chart(cum, {
    type: 'line',
    data: {
        labels: uniqueNums,
        datasets: [{
            label: 'Кумулятивна крива',
            borderColor: 'black',
            data: cumulative_data
        }],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


//cumulative curve rel
var cum_rel = document.getElementById('cumulative_rel').getContext('2d');
var chart = new Chart(cum_rel, {
    type: 'line',
    data: {
        labels: uniqueNums,
        datasets: [{
            label: 'Кумулятивна крива (за відносними частотами)',
            borderColor: 'black',
            data: empiric_data
        }],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


//empirical function
var emp = document.getElementById('empirical').getContext('2d');
var chart = new Chart(emp, {
    type: 'bar',
    data: {
        labels: text,
        datasets: [{
            label: 'Емпірична функція розподілу',
            borderWidth: 2,
            borderColor: 'black',
            borderWidth:{ top:3, right:0, bottom:0, left:0 },
            barPercentage: 0.5,
            barThickness: 75,
            maxBarThickness: 180,
            minBarLength: 2,
            data: empiric_data
        }],
    },
    options: {
        scales: {
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});




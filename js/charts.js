//---------
// CHARTS
//---------

function buildGraphs(){

    let text = [];
    let text_cum = [];

    let gist_data = [];
    let gist_rel_data = [];

    let cum_data = [];
    let cum_rel_data = [];

    let tempSum = 0;
    for(let [key, value] of intervalToFrequency){
        tempSum += value;

        text.push(`${key[0].toFixed(2)}-${key[1].toFixed(2)}`);
        text_cum.push(`${((key[0]+key[1])/2).toFixed(2)}`);
        gist_data.push(value);
        gist_rel_data.push(value/numbers.length);
        cum_data.push(tempSum);
        cum_rel_data.push(tempSum/numbers.length);
    }
    


    //gistogram function
    var gist = document.getElementById('gisto').getContext('2d');
    var chart = new Chart(gist, {
        type: 'bar',
        data: {
            labels: text,
            datasets: [{
                label: 'Гістограма частот',
                borderWidth: 2,
                borderColor: 'black',
                borderWidth:{ top:3, right:3, bottom:0, left:3 },
                barPercentage: 0.5,
                barThickness: 110,
                maxBarThickness: 180,
                minBarLength: 2,
                data: gist_data
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

    
    //gistogram relative function
    var gist_rel = document.getElementById('gisto_rel').getContext('2d');
    var chart = new Chart(gist_rel, {
        type: 'bar',
        data: {
            labels: text,
            datasets: [{
                label: 'Гістограма відносних частот',
                borderWidth: 2,
                borderColor: 'black',
                borderWidth:{ top:3, right:3, bottom:0, left:3 },
                barPercentage: 0.5,
                barThickness: 110,
                maxBarThickness: 180,
                minBarLength: 2,
                data: gist_rel_data
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
    
    //cumulative curve
    var cum = document.getElementById('cumulative').getContext('2d');
    var chart = new Chart(cum, {
        type: 'line',
        data: {
            labels: text_cum,
            datasets: [{
                label: 'Кумулятивна крива',
                borderColor: 'black',
                data: cum_data
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

    //relative cumulative curve
    var cum = document.getElementById('cumulative_rel').getContext('2d');
    var chart = new Chart(cum, {
        type: 'line',
        data: {
            labels: text_cum,
            datasets: [{
                label: 'Кумулятивна крива (за відносними частотами)',
                borderColor: 'black',
                data: cum_rel_data
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
                barThickness: 110,
                maxBarThickness: 180,
                minBarLength: 2,
                data: cum_rel_data
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
    
    
    
    
}

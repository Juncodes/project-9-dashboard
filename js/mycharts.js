// CHARTS 
var Chart = require('../chart/chart.js')
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});
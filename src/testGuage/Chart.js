var barCtx1 = document.getElementById("barChart1");
var barCtx2 = document.getElementById("barChart2");
var pieCtx1 = document.getElementById("pieChart1");
var pieCtx2 = document.getElementById("pieChart2");
var lineCtx1 = document.getElementById("lineChart1");
var lineCtx2 = document.getElementById("lineChart2");


var barChart1 = new Chart(barCtx1, {
    type: 'bar',
    data: {
        labels: ["發電機1", "發電機2", "發電機3", "發電機4", "發電機5", "發電機6"],
        datasets: [{
            label: '發電量',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
var barChart2 = new Chart(barCtx2, {
    type: 'bar',
    data: {
        labels: ["B2電表", "B1電表", "1F電表", "2F電表", "3F電表", "4F電表"],
        datasets: [{
            label: '耗電量',
            data: [784, 912, 1520, 754, 2253, 3078],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
var pieData1 = {
    labels: [
        "其他用電",
        "空調用電",
        "照明用電"
    ],
    datasets: [
        {
            data: [30, 50, 10],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};
var pieData2 = {
    labels: [
        "地下用電",
        "地上用電"
    ],
    datasets: [
        {
            data: [33, 67],
            backgroundColor: [
                "#FF6384",
                "#36A2EB"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB"
            ]
        }]
};
var PieChart1 = new Chart(pieCtx1,{
    type: 'pie',
    data: pieData1,
    //options: options
});
var PieChart2 = new Chart(pieCtx2,{
    type: 'pie',
    data: pieData2,
    //options: options
});
const monLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var lineData1 = {
  labels: monLabels,
  datasets: [{
    label: '月用電量',
    data: [3054, 5987, 7856, 2781, 3556, 4855, 4021, 3351, 4785, 3641, 4877, 3594],
    fill: false,
    borderColor: 'rgb(190, 192, 75)',
    tension: 0.1
  }]
};
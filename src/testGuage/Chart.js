var barCtx1 = document.getElementById("barChart1");
var barCtx2 = document.getElementById("barChart2");
var pieCtx1 = document.getElementById("pieChart1");
var pieCtx2 = document.getElementById("pieChart2");

var myChart = new Chart(barCtx1, {
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
var pieData = {
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
var myPieChart = new Chart(pieCtx1,{
    type: 'pie',
    data: pieData,
    //options: options
});
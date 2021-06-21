var barCtx1 = document.getElementById("barChart1");
var barCtx2 = document.getElementById("barChart2");
var pieCtx1 = document.getElementById("pieChart1");
var pieCtx2 = document.getElementById("pieChart2");
var lineCtx1 = document.getElementById("lineChart1");
var lineCtx2 = document.getElementById("lineChart2");


var barChart1 = new Chart(barCtx1, {
    type: 'bar',
    data: {
        labels: [
        "其他用電",
        "空調用電",
        "照明用電"
    ],
        datasets: [{
            label: '日用電量',
            data: [188, 357, 53],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
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
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '用電量(周)'
            }
        }
    }
});
var barChart2 = new Chart(barCtx2, {
    type: 'bar',
    data: {
        labels: [
        "其他用電",
        "空調用電",
        "照明用電"
    ],
        datasets: [{
            label: '月用電量',
            data: [5721, 11476, 1572],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
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
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '用電量(月)'
            }
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
        }
    ]
};
var pieData2 = {
    labels: [
        "其他用電",
        "空調用電",
        "照明用電"
    ],
    datasets: [
        {
            data: [27, 44, 100-27-44],
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
var PieChart1 = new Chart(pieCtx1,{
    type: 'pie',
    data: pieData1,
    options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '用電量占比(日)'
      }
    }
  }
});
var PieChart2 = new Chart(pieCtx2,{
    type: 'pie',
    data: pieData2,
    options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '用電量占比(月)'
      }
    }
  }
});
const monLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var lineData1 = {
  labels: monLabels,
  datasets: [{
    label: '其他用電量',
    data: [4548, 3897, 4178, 3278, 4355, 4485, 4402, 3557, 4785, 4364, 3487, 3257],
    fill: false,
    borderColor: '#FF6384',
    tension: 0.1
  },{
    label: '空調用電量',
    data: [11354, 10587, 8856, 12781, 13556, 16753, 24855, 25724, 14785, 13641, 12877, 11594],
    fill: false,
    borderColor: '#36A2EB',
    tension: 0.1
  },{
    label: '空調用電量',
    data: [1544, 1873, 1568, 1817, 1564, 2552, 2212, 1514, 2855, 2416, 3776, 1411],
    fill: false,
    borderColor: '#FFCE56',
    tension: 0.1
  }]
};
var lineChart1 = new Chart(lineCtx1,{
    type: 'line',
    data: lineData1,
    options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '用電量月總覽'
      }
    }
  }
})
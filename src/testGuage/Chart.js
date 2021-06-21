var barCtx1 = document.getElementById("barChart1");
var barCtx2 = document.getElementById("barChart2");
var pieCtx1 = document.getElementById("pieChart1");
var pieCtx2 = document.getElementById("pieChart2");
var lineCtx1 = document.getElementById("lineChart1");
var lineCtx2 = document.getElementById("lineChart2");


var barChart1 = new Chart(barCtx1, {
    type: 'bar',
    data: {
        labels: ['6/19', '6/20', '6/21'],
        datasets: [
        {
            label: '其他用電',
            data: [188, 212, 153],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        },{
            label: '空調用電',
            data: [394, 357, 579],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        },{
            label: '照明用電',
            data: [72, 85, 63],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
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
                position: 'bottom',
            },
            title: {
                display: true,
                text: '用電量(近3日)'
            }
        }
    }
});
var barChart2 = new Chart(barCtx2, {
    type: 'bar',
    data: {
        labels: ['Apr', 'May', 'June'],
        datasets: [{
            label: '其他用電',
            data: [5541, 6360, 153*31],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        },{
            label: '空調用電',
            data: [394*32.7, 357*31.4, 579*30.71],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        },{
            label: '照明用電',
            data: [72*30.7, 85*30.14, 63*31.87],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
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
                position: 'bottom',
            },
            title: {
                display: true,
                text: '用電量(近3月)'
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
            data: [27, 44, 29],
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
        position: 'bottom',
      },
      title: {
        display: true,
        text: '用電量占比(日)'
      },
      datalabels: {
            formatter: (value, ctx) => {
                let sum = 0;
                let dataArr = ctx.chart.data.datasets[0].data;
                dataArr.map(data => {
                    sum += data;
                });
                let percentage = (value*100 / sum).toFixed(2)+"%";
                return percentage;
            }
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
        position: 'bottom',
      },
      title: {
        display: true,
        text: '用電量占比(月)'
      },
      datalabels: {
            formatter: (value, ctx) => {
                let sum = 0;
                let dataArr = ctx.chart.data.datasets[0].data;
                dataArr.map(data => {
                    sum += data;
                });
                let percentage = (value*100 / sum).toFixed(2)+"%";
                return percentage;
            }
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
        position: 'bottom',
      },
      title: {
        display: true,
        text: '用電量年總覽'
      }
    }
  }
})
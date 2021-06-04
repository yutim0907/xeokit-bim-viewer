var fruitCanvas = document.getElementById("pieChart");

var fruitData = {
    labels: [
        "Mango",
        "Apple",
        "Grape",
        "Pineapple",
        "Watermelon"
    ],
    datasets: [
        {
            data: [123, 75, 41, 61, 30],
            backgroundColor: [
     "#fd7c78",
    "#70dafc",
    "#fed085",
    "#b9e88b",
    "#82a5fc",
            ]
        }]
};

var options = {
  title: {
    display: true,
    text: "Highlight a portion on click",
    position: "top"
  },
  onClick: (evt, item) => {
    pieChart.update();
    item[0]._model.outerRadius += 10;
  }
};

var pieChart = new Chart(fruitCanvas, {
  type: 'pie',
  data: fruitData,
  options: options
});
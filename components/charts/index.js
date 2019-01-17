const ctx = document.getElementById("bar-chart").getContext('2d');
const pctx = document.getElementById("pie-chart").getContext('2d');

let barChart;
$.ajax({
  dataType: 'json',
  type: 'GET',
  url: 'edificios_bar.json',
  mimeType: 'application/json'
}).then((response) => {
  const xData = response.data.map((value) => {
    return value.x;
  });
  const yData = response.data.map((value) => {
    return value.y;
  });

  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, '#006c4b');
  gradient.addColorStop(0.5, '#005a3f');
  gradient.addColorStop(1, '#73ae9c');

  barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: xData,
      datasets: [{
        // label: 'Axis Y by Axis X',
        data: yData,
        backgroundColor: gradient,
        borderRadius: '4px'
      }]
    },
    options: {
      // legend: {
      //   labels: {
      //     backgroundColor: "white",
      //   }
      // },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            drawBorder: false,
          }
        }],
        xAxes: [{
          barPercentage: 0.2,
          gridLines: {
            display: false,
          }
        }]
      }
    }
  });

});

let pieChart
$.ajax({
  dataType: 'json',
  type: 'GET',
  url: 'sum_pie.json',
  mimeType: 'application/json'
}).then((responseValues) => {

  // let responseColors;
  $.ajax({
    dataType: 'json',
    type: 'GET',
    url: 'color_palette.json',
    mimeType: 'application/json'
  }).then((responseColors) => {
    console.log(responseColors)
    const xData = responseValues.data.map((value) => {
      return value.x;
    });
    const yData = responseValues.data.map((value) => {
      return value.y;
    });

    pieChart = new Chart(pctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          label: 'Axis Y by Axis X',
          data: yData,
          backgroundColor: responseColors.colors
        }],
        labels: xData
      },
      options: {
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                return previousValue + currentValue;
              });
              var currentValue = dataset.data[tooltipItem.index];
              var percentage = Math.floor(((currentValue / total) * 100) + 0.5);
              return percentage + "%";
            }
          }
        }
      }
    });
  });
});


// document.getElementById('changeCircleSize').addEventListener('click', function() {
//   console.log(pieChart.options)
//   if (pieChart.options.circumference === Math.PI) {
//     pieChart.options.circumference = 2 * Math.PI;
//     pieChart.options.rotation = -Math.PI / 2;
//   } else {
//     pieChart.options.circumference = Math.PI;
//     pieChart.options.rotation = -Math.PI;
//   }

//   pieChart.update();
// });
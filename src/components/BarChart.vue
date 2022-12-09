<template>
  <div>
      <canvas id="myChart" class="grafica"></canvas>
  </div>
</template>
<script>
import Chart from 'chart.js/auto'
export default{
  mounted(){
      const myChart = new Chart(document.getElementById('myChart'), {
          type: 'line',
          data: {
              labels: ['ZONA1', 'ZONA2', 'ZONA3', 'ZONA4'],
              datasets: [{
                  label: '# of Votes',
                  data: [45, 30, 15, 10],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  y: {
                  beginAtZero: true
                  }
              },
          }
      });
      myChart;
  }
}
</script>
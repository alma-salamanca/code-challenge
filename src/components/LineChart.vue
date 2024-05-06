<script setup>
import Chart from "chart.js/auto";
import { ref, onMounted } from "vue";
import { getGradient } from "../modules/linear-gradient.js";

const props = defineProps({
  title: String,
  months: Array,
  complaints: Array,
  treshold: Number,
});

const myChart = ref();

onMounted(() => {
  createChart();
});

function createChart() {
  new Chart(myChart.value, getChartConfiguration());
}

function getChartConfiguration() {
  const red = "#ff6384";
  const config = {
    type: "line",
    data: {
      labels: props.months,
      datasets: [
        {
          label: props.title,
          data: props.complaints,
          fill: "origin",
          pointBackgroundColor: red,
          borderColor: red,
          backgroundColor: function (context) {
            const chart = context.chart;
            return getGradient(chart, props.treshold);
          },
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true },
      },
    },
  };

  return config;
}
</script>

<template>
  <div class="chart-container">
    <canvas id="myChart" ref="myChart"></canvas>
  </div>
</template>

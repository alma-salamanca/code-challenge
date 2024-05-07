<script setup>
import Chart from "chart.js/auto";
import { ref, onMounted } from "vue";
import { getGradient } from "../modules/linear-gradient.js";

const props = defineProps({
  title: String,
  months: Array,
  complaints: Array,
  initialTreshold: Number,
});

var treshold = props.initialTreshold;
const canvas = ref();
let chart = null;

onMounted(() => {
  createChart();
});

function createChart() {
  chart = new Chart(canvas.value, getChartConfiguration());
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
            return getGradient(context.chart, treshold);
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

function updateChart(updatedTreshold) {
  treshold = updatedTreshold;
  chart.update();
}

defineExpose({ updateChart });
</script>

<template>
  <div class="chart-container">
    <canvas id="canvas" ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LineChart from "./components/LineChart.vue";

const tresholdInput = 0;
const chartComponent = ref(null);
const data = {
  title: "Complaints by month",
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  complaints: [8, 3, 5, 4, 6, 3, 15],
  initialTreshold: tresholdInput,
};
</script>

<template>
  <main>
    <div class="container">
      <label for="input">Enter treshold</label>
      <input
        id="input"
        v-model="tresholdInput"
        type="number"
        @change="chartComponent.updateChart(tresholdInput)"
      />
    </div>

    <div class="container">
      <LineChart ref="chartComponent" v-bind="data" />
    </div>
  </main>
</template>

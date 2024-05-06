<script setup>
import LineChart from "./components/LineChart.vue";

const title = "Complaints by month";
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const complaints = [8, 3, 5, 4, 6, 3, 15];
const treshold = 0.5;
</script>

<template>
  <main>
    <LineChart
      :title="title"
      :months="months"
      :complaints="complaints"
      :treshold="treshold"
    />
  </main>
</template>

<template>
  <div ref="chartDom" />
</template>
<script type="module" lang="ts" setup>
import { initChart } from "@/utils/echart-tool/init"
import { ref, onMounted } from "vue"
import { stackoption } from "@/utils/echart-tool/options";

const chartDom = ref(null)
const option = stackoption

onMounted(() => {
  let mychart = initChart(chartDom.value, option)
  window.onresize = () => {
    mychart.resize()
  }
})
</script>

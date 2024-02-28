import echarts from "@/plugins/vue-echarts"
export function initChart(dom: HTMLElement, option?: any) {
  const mychart = echarts.init(dom)
  option && mychart.setOption(option)
  return mychart
}

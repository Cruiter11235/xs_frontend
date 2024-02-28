import { type AppRouteModule } from "@/router/types"
const Layouts = () => import("@/layouts/index.vue")

const echartDemo: AppRouteModule = {
  name: "EchartsDemo",
  component: Layouts,
  path: "/EchartsDemo",
  redirect: "/EchartsDemo/StackedChart",
  meta: {
    title: "EchartsDemo",
    elIcon: "Histogram",
    alwaysShow: true
  },
  children: [
    {
      path: "StackedChart",
      component: () => import("@/views/test/StackChart.vue"),
      name: "StackChart",
      meta: {
        title: "StackChart"
      }
    }
  ]
}
export default echartDemo

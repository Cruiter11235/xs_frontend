import { type AppRouteModule } from "@/router/types"
const Layouts = () => import("@/layouts/index.vue")

const dashboard: AppRouteModule = {
  path: "/",
  component: Layouts,
  redirect: "/dashboard",
  name: "dashboard",
  meta: {
    title: "首页"
  },
  children: [
    {
      path: "dashboard",
      component: () => import("@/views/dashboard/index.vue"),
      name: "Dashboard",
      meta: {
        title: "首页",
        svgIcon: "dashboard",
        affix: true
      }
    }
  ]
}

export default dashboard

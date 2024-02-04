import { type AppRouteModule } from "@/router/types"
const Layouts = () => import("@/layouts/index.vue")

const unocss: AppRouteModule = {
  path: "/unocss",
  name: "UnoCSS",
  component: Layouts,
  redirect: "/unocss/index",
  meta: {
    title: "UnoCSS"
  },
  children: [
    {
      path: "index",
      component: () => import("@/views/unocss/index.vue"),
      name: "UnoCSS",
      meta: {
        title: "UnoCSS",
        svgIcon: "unocss"
      }
    }
  ]
}

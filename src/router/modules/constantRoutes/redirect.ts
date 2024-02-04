import { type AppRouteModule } from "@/router/types"
const Layouts = () => import("@/layouts/index.vue")

const redirect: AppRouteModule = {
  path: "/redirect",
  component: Layouts,
  meta: {
    hidden: true
  },
  name: "Layouts",
  children: [
    {
      path: "/redirect/:path(.*)",
      name: "Redirect",
      component: () => import("@/views/redirect/index.vue"),
      meta: {
        hidden: true
      }
    }
  ]
}

export default redirect

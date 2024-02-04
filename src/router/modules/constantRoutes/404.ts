import { type AppRouteModule } from "@/router/types"
const Layouts = () => import("@/layouts/index.vue")

const E404: AppRouteModule = {
  path: "/404",
  name: "404",
  component: () => import("@/views/error-page/404.vue"),
  meta: {
    hidden: true
  },
  alias: "/:pathMatch(.*)*"
}

export default E404

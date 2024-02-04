import { type AppRouteModule } from "@/router/types"
const Layouts = () => import("@/layouts/index.vue")

const E403: AppRouteModule = {
  path: "/403",
  name: "403",
  component: () => import("@/views/error-page/403.vue"),
  meta: {
    hidden: true
  }
}

export default E403

import { type AppRouteModule } from "@/router/types"
const Layouts = () => import("@/layouts/index.vue")

const login: AppRouteModule = {
  path: "/login",
  name: "Login",
  component: () => import("@/views/login/index.vue"),
  meta: {
    hidden: true
  }
}

export default login

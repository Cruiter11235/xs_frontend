import { type RouteRecordRaw, createRouter, type AppRouteModule } from "vue-router"
import { history, flatMultiLevelRoutes } from "./helper"
import routeSettings from "@/config/route"

const Layouts = () => import("@/layouts/index.vue")

/**
 * 常驻路由
 * 除了 redirect/403/404/login 等隐藏页面，其他页面建议设置 Name 属性
 */
const modules = import.meta.glob("./modules/constantRoutes/**/*.ts", { eager: true })
const routeModuleList: AppRouteModule[] = []
Object.keys(modules).forEach((key) => {
  const mod = (modules as Recordable)[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})
export const constantRoutes: RouteRecordRaw[] = [...routeModuleList]

/**
 * 动态路由
 * 用来放置有权限 (Roles 属性) 的路由
 * 必须带有 Name 属性
 */
const asymodules = import.meta.glob("./modules/asyncRoutes/**/*.ts", { eager: true })
const asyrouteModuleList: AppRouteModule[] = []
Object.keys(asymodules).forEach((key) => {
  const mod = (asymodules as Recordable)[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  asyrouteModuleList.push(...modList)
})
export const asyncRoutes: RouteRecordRaw[] = [
  ...asyrouteModuleList,
  {
    path: "/:pathMatch(.*)*", // Must put the 'ErrorPage' route at the end, 必须将 'ErrorPage' 路由放在最后
    redirect: "/404",
    name: "ErrorPage",
    meta: {
      hidden: true
    }
  }
]
/** createRouter() 创建路由实例 */
const router = createRouter({
  history,
  routes: routeSettings.thirdLevelRouteCache ? flatMultiLevelRoutes(constantRoutes) : constantRoutes
})

/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload()
  }
}

export default router

import { type AppRouteModule } from "@/router/types"
// @ts-ignore
const Layouts = () => import("@/layouts/index.vue")

const permission: AppRouteModule = {
  path: "/permission",
  component: Layouts,
  redirect: "/permission/page",
  name: "Permission",
  meta: {
    title: "权限管理",
    svgIcon: "lock",
    roles: ["admin", "editor"], // 可以在根路由中设置角色
    alwaysShow: true // 将始终显示根菜单
  },
  children: [
    {
      path: "page",
      component: () => import("@/views/permission/page.vue"),
      name: "PagePermission",
      meta: {
        title: "页面权限",
        roles: ["admin"] // 或者在子导航中设置角色
      }
    },
    {
      path: "directive",
      component: () => import("@/views/permission/directive.vue"),
      name: "DirectivePermission",
      meta: {
        title: "指令权限" // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
      }
    }
  ]
}
export default permission

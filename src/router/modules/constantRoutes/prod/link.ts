import { type AppRouteModule } from "@/router/types"
const Layouts = () => import("@/layouts/index.vue")

const link: AppRouteModule = {
  path: "/neo4j",
  name: "neo4j",
  meta: {
    title: "neo4j",
    svgIcon: "link"
  },
  children: [
    {
      path: "http://www.zjjcstech.top:7474/browser/",
      component: () => {},
      name: "neo4j",
      meta: {
        title: "neo4j",
        svgIcon: "link"
      }
    }
  ]
}

export default link

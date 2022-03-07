import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path:"/",
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../components/login")
  },
  {
    path: '/register',
    name: 'register',
    component: () => import("../components/register")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

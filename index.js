const Home = {
  // 设定模版Home
  template:"<h2>首页</h2>"
}

const Event = {
  template: "<h2>活动</h2>"
}

// 设定路由
const routes = [
  {
    path: '/',   // 设定根目录
    component: Home   // 设定对应组件
  },
  {
    path: '/events',
    component: Event
  }
]

// 实例化Router
const router = new VueRouter({
  routes: routes    // 设定对应路由的值，可以简写为routes
})

const app = new Vue({
  el: '#app',
  router:router   // 这是简写路由实例，对应的是之前实例化的router
})

// 路由器对象模块
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home.vue'
import Order from '../views/Order/Order.vue'
import Personal from '../views/Personal/Personal.vue'
import Search from '../views/Search/Search.vue'
import Login from '../views/Login/Login.vue'

Vue.use(Router)


export default new Router({
  routes:[
    {
      path:"/home",
      component:Home,
      meta:{//$route.meta访问，判断当前路由是否需要显示footer
        showFooter:true
      }
    },
    {
      path:"/order",
      component:Order,
      meta:{//$route.meta访问，判断当前路由是否需要显示footer
        showFooter:true
      }
    },
    {
      path:"/login",
      component:Login
    },
    {
      path:"/personal",
      component:Personal,
      meta:{//$route.meta访问，判断当前路由是否需要显示footer
        showFooter:true
      }
    },
    {
      path:"/search",
      component:Search,
      meta:{//$route.meta访问，判断当前路由是否需要显示footer
        showFooter:true
      }
    },
    {
      path:"/",
      redirect:"/home"
    }

  ]
})
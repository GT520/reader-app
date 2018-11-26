// import Vue from 'vue'
// import Router from 'vue-router'
// import home from "../components/home"
// Vue.use(Router)
//
// export default new Router({
//   mode:'history',
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: home,
//       children:[
//
//
//       ]
//     },
//     {
//       path:'/reader/:bookid',
//       name:'reader',
//       component: resolve => require(['@/components/reader/reader'], resolve),
//     },
//
//   ]
// })
import Vue from 'vue'
import Router from 'vue-router'
import bookinfo from "../components/pages/BookInfo"
import myBooks from '../components/mine/MineBooks'
import reader from "../components/reader/ReaderView"
import category from "../components/category/CategoryView"
import rank from '../components/bookrank/BookRankView'
import ranklist from '../components/bookrank/BookRankList'
import categorylist from "../components/category/CategoryList"
import me from "../components/mine/MineView"
import search from "../components/search/SearchView"
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
        {
          path:'/',
          name:'me',
          component: resolve => require(['@/components/mine/MineView'], resolve),
          meta:{
            keepAlive:false
          }
        },
        {
          path: '/myBooks',
          name: 'myBooks',
          component: resolve => require(['@/components/mine/MineBooks'], resolve),
          meta:{
            keepAlive:true
          }

        },
        {
          path:'/bookinfo/:bookid',
          name:'bookinfo',
          component: resolve => require(['@/components/pages/BookInfo'], resolve),
          meta:{
            keepAlive:false
          }
        },
        {
          path:'/category',
          name:'category',
          component: resolve => require(['@/components/category/CategoryView'], resolve),
          meta:{
            keepAlive:true
          }
        },
        {
          path:'/rank',
          name:'rank',
          component: resolve => require(['@/components/bookrank/BookRankView'], resolve),
          meta:{
            keepAlive:true
          }
        },
        {
          path:'/ranklist/:rankid',
          name:'ranklist',
          component: resolve => require(['@/components/bookrank/BookRankList'], resolve),
          meta:{
            keepAlive:false
          }
        },
        {
          path:'/categorylist',
          name:'categorylist',
          component: resolve => require(['@/components/category/CategoryList'], resolve),
          meta:{
            keepAlive:false
          }
        },
        {
          path:'/search',
          name:'search',
          component: resolve => require(['@/components/search/SearchView'], resolve),
          meta:{
            keepAlive:false
          }
        },
        {
          path:'/reader/:bookid',
          name:'reader',
          component: resolve => require(['@/components/reader/ReaderView'], resolve),
          meta:{
            keepAlive:false,
            isShowFoot:false
          }
        }
  ]
})

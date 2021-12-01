import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from 'layout/Index.vue'

// 为路由增加额外配置项: 不生效
type AppRouteRecordRow = RouteRecordRaw & {
  hidden?: boolean
}

export const routes: Array<AppRouteRecordRow> = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: {
      title: '首页',
      icon: 'HomeFilled',
      roles: ['sys:manage']
    },
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          title: '首页',
          icon: 'HomeFilled',
          roles: ['sys:manage']
        }
      }
    ]
  },

  {
    path: '/system',
    component: Layout,
    name: 'system',
    meta: {
      title: '系统管理',
      icon: 'Setting',
      roles: ['sys:manage'],
      parentid: 0
    },
    children: [
      {
        path: '/department',
        component: () => import('views/System/department.vue'),
        name: 'department',
        meta: {
          title: '机构管理',
          icon: 'Briefcase',
          roles: ['sys:dept'],
          parentId: 17
        }
      },
      {
        path: '/userList',
        component: () => import('views/System/user.vue'),
        name: 'userList',
        meta: {
          title: '用户管理',
          icon: 'UserFilled',
          roles: ['sys:user'],
          parentId: 17
        }
      },
      {
        path: '/roleList',
        component: () => import('views/System/roles.vue'),
        name: 'roleList',
        meta: {
          title: '角色管理',
          icon: 'User',
          roles: ['sys:role'],
          parentId: 17
        }
      },
      {
        path: '/menuList',
        component: () => import('views/System/menu.vue'),
        name: 'menuList',
        meta: {
          title: '权限管理',
          icon: 'Menu',
          roles: ['sys:menu'],
          parentId: 17
        }
      }
    ]
  },
  {
    path: '/goods',
    component: Layout,
    name: 'goods',
    meta: {
      title: '商品管理',
      icon: 'Present',
      roles: ['sys:goods'],
      parentid: 0
    },
    children: [
      {
        path: '/goodCategory',
        component: () => import('views/Goods/goodCategory.vue'),
        name: 'goodCategory',
        meta: {
          title: '商品分类',
          icon: 'Money',
          roles: ['sys:goodsCategory'],
          parentId: 34
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

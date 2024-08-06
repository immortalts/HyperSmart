export default [  
  {
    path: '/en-US/index',
    // @ts-ignore
    component: () => import('D:/A桌面/HyperSmart/HyperSmart/.varlet/site/pc/pages/index/index.vue')
  },
  {
    path: '/zh-CN/index',
    // @ts-ignore
    component: () => import('D:/A桌面/HyperSmart/HyperSmart/.varlet/site/pc/pages/index/index.vue')
  },
  {
    path: '/layout',
    // @ts-ignore
    component:()=> import('D:/A桌面/HyperSmart/HyperSmart/.varlet/site/pc/Layout.vue'),
    children: [
      
      {
        path: '/en-US/button',
        // @ts-ignore
        component: () => import('D:/A桌面/HyperSmart/HyperSmart/src/button/docs/en-US.md')
      },
      {
        path: '/zh-CN/button',
        // @ts-ignore
        component: () => import('D:/A桌面/HyperSmart/HyperSmart/src/button/docs/zh-CN.md')
      },
      {
        path: '/en-US/locale',
        // @ts-ignore
        component: () => import('D:/A桌面/HyperSmart/HyperSmart/src/locale/docs/en-US.md')
      },
      {
        path: '/zh-CN/locale',
        // @ts-ignore
        component: () => import('D:/A桌面/HyperSmart/HyperSmart/src/locale/docs/zh-CN.md')
      },
      {
        path: '/en-US/home',
        // @ts-ignore
        component: () => import('D:/A桌面/HyperSmart/HyperSmart/docs/home.en-US.md')
      },
      {
        path: '/zh-CN/home',
        // @ts-ignore
        component: () => import('D:/A桌面/HyperSmart/HyperSmart/docs/home.zh-CN.md')
      },
    ]
  }
]
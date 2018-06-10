export const menus = [
  { path: '/dashboard', title: '首页', icon: 'home' },
  {
    path: '/chart', title: '图表', icon: 'area-chart',
    children: [
      { path: '/chart/line', title: '折线图' },
      { path: '/chart/keyboard', title: '键盘图表' },
      { path: '/chart/mixchart', title: '混合图表'},
    ],
  },

  {
    path: '/permission', title: '权限测试', icon: 'rocket',
    children: [
      { path: '/permission/toggle', title: '权限切换' },
      { path: '/permission/intercept', title: '路由拦截', permission:'admin'}
    ],
  },
  {
    path: '/table', title: '表格', icon: 'copy',
    children: [
      { path: '/table/basic', title: '基础表格' },
      { path: '/table/edit', title: '表格编辑' },
      { path: '/table/dynamic', title: '动态列表格' },
    ],
  },
  {
    path: '/form', title: '表单', icon: 'edit', permission:'admin'
  },
  {
    path: '/components', title: '组件', icon: 'scan',
    children: [
      { path: '/components/wysiwyg', title: '富文本'},
      { path: '/components/drag', title: '拖拽'},
      { path: '/components/backToTop', title: '返回顶部'}
    ],
  },

  {
    path: '/error', title: '错误页面', icon: 'switcher',
    children: [
      { path: '/error/401', title: '401'},
      { path: '/error/404', title: '404'},
    ],
  },
  {
    path: '/map', title: '地图', icon: 'star',
  }
]
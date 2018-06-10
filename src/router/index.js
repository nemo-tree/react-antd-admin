import Dashboard from '@/views/dashboard'
import Error401 from '@/views/error/401'
import Error404 from '@/views/error/404'
import FormCreate from '@/views/form'
import Map from '@/views/map'
import PermissionIntercept from '@/views/permission/intercept'
import PermissionToggle from '@/views/permission/toggle'

import ComponentWysiwyg from '@/views/components/wysiwyg'
import ComponentDrag from '@/views/components/drag'
import ComponentBackToTop from '@/views/components/backtotop'

import LineChart from '@/views/components/chart/linechart'
import Keyboard from '@/views/components/chart/keyboard'
import Mixchart from '@/views/components/chart/mixchart'

import TableBasic from '@/views/table/basic'
import TableEdit from '@/views/table/edit'
import TableDynamic from '@/views/table/dynamic'


export const routes = [

  { path: '/dashboard', component: Dashboard },
  { path: '/chart/line', component: LineChart },
  { path: '/chart/keyboard', component: Keyboard },
  { path: '/chart/mixchart', component: Mixchart },

  { path: '/permission/toggle', component: PermissionToggle },
  { path: '/permission/intercept', component: PermissionIntercept, permission:'admin' },

  { path: '/table/basic', component: TableBasic },
  { path: '/table/edit', component: TableEdit },
  { path: '/table/dynamic', component: TableDynamic },


  { path: '/form', component: FormCreate, permission:'admin'},

  { path: '/components/wysiwyg', component: ComponentWysiwyg },
  { path: '/components/drag', component: ComponentDrag },
  { path: '/components/backToTop', component: ComponentBackToTop },


  { path: '/error/401', component: Error401},
  { path: '/error/404', component: Error404},

  {
    path: '/map', component: Map
  }
]
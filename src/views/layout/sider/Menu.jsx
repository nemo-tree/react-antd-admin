import React from 'react'
import { Menu, Icon } from 'antd'
import { menus } from '@/router/menus'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addTaglist} from '@/redux/actions'
const SubMenu = Menu.SubMenu


const MenuComponent = props => {
  const { history } = props
  // 当前选中的菜单栏,当前权限角色
  const menuSelected = history.location.pathname, roles= localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')).roles
  // 当前展开的菜单栏
  const menuOpened = `/${menuSelected.split('/')[1]}`

  const handleFilter = permission =>{
    // 过滤没有权限的页面
      if(!permission ||permission===roles ) return true
      return false
  }
// 每次点击菜单栏时，判断tagslist数组有没存在当前path，如果没有，添加进去
// tagslist最多存在10个，>=10时，删除第一个tag
  const handleMenuSelect =({key})=>{
      props.addTaglist(key)
  }

  return (
    <Menu
        defaultOpenKeys={[menuOpened]}
        defaultSelectedKeys={[menuSelected]}
        inlineCollapsed={props.collapsed}
        mode="inline"
        onSelect={handleMenuSelect}
        style={{
          borderRight: 'none'
        }}
    >
      {
        menus.map(ele => {
          if(ele.children){
            return (
              handleFilter(ele.permission) && <SubMenu key={ele.path}
                  title={<span><Icon type={ele.icon} /><span>{ele.title}</span></span>}
                                              >
              {ele.children.map(subItem =>
                handleFilter(subItem.permission) && <Menu.Item key={subItem.path}>
                  <Link to={subItem.path}>
                    {subItem.title}
                  </Link>
                </Menu.Item>
              )}
            </SubMenu>
          )
          }else {
              return (
                handleFilter(ele.permission) && <Menu.Item key={ele.path}>

                  <Link to={ele.path}>
                    <Icon type={ele.icon} />
                    <span>{ele.title}</span>
                  </Link>

                </Menu.Item>
            )
          }

        })
      }
    </Menu>
  )
}

const mapStateToProps = state => ({userInfo: state.user.userInfo,taglist: state.UI.taglist})
const mapDispatchToProps = dispatch => ({
  addTaglist: playload => {
    dispatch(addTaglist(playload))
  }
})
export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(MenuComponent))

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout,Icon } from 'antd'
import Menu from './Menu'
const { Sider } = Layout

class SiderComponent extends Component {
  render () {
    const { collapsed, isMobile } = this.props

    return (
      <Sider
          collapsed={isMobile?false:collapsed}
          collapsible
          style={{ overflowY: 'auto', overflowX: 'hidden', height: '100vh', position: 'fixed', left: 0 ,backgroundColor:'#fff'}}
          trigger={null}
          width={isMobile ? 0 :250}
      >
        <div className="logo">
          <Icon
              type="github"
          /> {
            collapsed || <span> Github </span>
          }
        </div>
        <Menu
            collapsed={collapsed}
        />
      </Sider>
    )
  }
}

const mapStateToProps = state => ({collapsed: state.UI.collapsed, isMobile: state.UI.isMobile})
export default connect(mapStateToProps)(SiderComponent)

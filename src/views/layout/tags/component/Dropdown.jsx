import React,{Component} from 'react'
import {emptyTaglist} from '@/redux/actions'
import {connect} from 'react-redux'
import { Menu, Dropdown, Icon ,Popconfirm,message} from 'antd'



class Dropdowns extends Component {

  handleCloseAll(){
    this.props.emptyTaglist()
  }
  catchTags(){
    localStorage.setItem('taglist',JSON.stringify(this.props.taglist))
    message.success('缓存成功，下次进入系统时，将自动读取当前标签页')
  }
  removeHistory(){
    localStorage.removeItem('taglist')
    message.success('已清空历史缓存')
  }

  render(){
        const menu = (
          <Menu>
            <Menu.Item onClick={this.handleCloseAll.bind(this)}>
              关闭所有标签
            </Menu.Item>
              <Menu.Item onClick={this.catchTags.bind(this)}>
                缓存当前标签
              </Menu.Item>
            <Menu.Item>
              <Popconfirm
                  onConfirm={this.removeHistory.bind(this)}
                  placement='bottom'
                  title="确认清空?"
              >
                清空历史缓存
              </Popconfirm>
            </Menu.Item>
          </Menu>
      )
      return (
          <div className='dropdown-wrap'>
            <Dropdown overlay={menu}
                trigger={['click']}
            >
              <Icon type="info-circle-o" />
            </Dropdown>
          </div>
      )
  }
}
const mapStateToProps = state => ({taglist: state.UI.taglist})
const mapDispatchToProps = dispatch => ({
  emptyTaglist: () => {
    dispatch(emptyTaglist)
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Dropdowns)

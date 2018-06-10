import React,{Component} from 'react'
import { Radio , Row} from 'antd'
import {getUserInfo} from '@/redux/actions'
import {connect} from 'react-redux'

const RadioGroup = Radio.Group
const RadioButton = Radio.Button

class Toggle extends Component {

  state = {
    value: null
  }


  onChange = e => {
    const value = e.target.value
    this.setState({value})
    // 重置token并且重新获取用户信息
    this.props.setToken(value)
    localStorage.setItem('token', value)
    this.props.getUserInfo()
  }
  render(){
    return (
      <div
          className='shadow-radius'
          style={{padding:20}}
      >
        <Row style={{margin:'20px 0'}}>
            <RadioGroup
                defaultValue={parseInt(localStorage.getItem('token'))}
                onChange={this.onChange}
            >
              <RadioButton value={2}>超级管理员</RadioButton>
              <RadioButton value={1}>普通用户</RadioButton>
            </RadioGroup>
        </Row>

        <Row>
            只有超级管理员可以看到当前页面，切换到普通用户时，无法访问当前页面和表单页面
        </Row>

      </div>

    )
  }
}
const mapStateToProps = state => ({token: state.user.token})
const mapDispatchToProps = ({
  setToken: params=> ({type:'SET_TOKEN',playload:params}),
  getUserInfo: () => getUserInfo()
})
export default connect(mapStateToProps, mapDispatchToProps)(Toggle)

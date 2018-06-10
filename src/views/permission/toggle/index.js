import React,{Component} from 'react'
import { Radio ,Input,Row,Col} from 'antd'
import {getUserInfo} from '@/redux/actions'
import {connect} from 'react-redux'

const RadioGroup = Radio.Group
const RadioButton = Radio.Button

class Toggle extends Component {

  state = {
    value: null,
    password: '******'
  }


  componentWillReceiveProps(nextProps){
    if(nextProps.token==2){
      this.setState({password:123456})
    }else {
      this.setState({password:'******'})
    }
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

        <Row style={{textAlign:'center'}}>只有超级管理员可以看到密码</Row>
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
            <Col
                span={2}
                style={{margin:'10px 0'}}
            >
               超级管理员
            </Col>
            <Col
                span={20}
                style={{margin:'10px 0'}}
            >

              <Input
                  defaultValue='admin'
                  readOnly
              />
              <Input
                  readOnly
                  style={{margin:'10px 0'}}
                  value={this.state.password}
              />
            </Col>
          </Row>

          <Row>
            <Col
                span={2}
                style={{margin:'10px 0'}}
            >
               普通用户
            </Col>
            <Col
                span={20}
                style={{margin:'10px 0'}}
            >

              <Input
                  defaultValue='normal'
                  readOnly
              />
              <Input
                  readOnly
                  style={{margin:'10px 0'}}
                  value={this.state.password}
              />
            </Col>
          </Row>
      </div>

    )
  }
}
const mapStateToProps = state => ({token: state.user.token})
const mapDispatchToProps = ({
  setToken:params=> ({type:'SET_TOKEN',playload:params}),
  getUserInfo: () => getUserInfo()
})
export default connect(mapStateToProps, mapDispatchToProps)(Toggle)

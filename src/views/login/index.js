import React, {Component} from 'react'
import './index.less'
import {connect} from 'react-redux'
import {Button, Input, Icon, Form, Checkbox,Spin } from 'antd'
import {login, getUserInfo} from '@/redux/actions'
import PropTypes from 'prop-types'
import Particles from 'react-particles-js'
import {particles} from './params'
const FormItem = Form.Item

class Login extends Component {

  static contextTypes  = {
    router: PropTypes.object
  }

  state = {
    loading: false
  }

  componentDidMount(){

    const historyUser = localStorage.getItem('user')
    if(historyUser){
      const {user,password} = JSON.parse(historyUser)
      this.props.form.setFieldsValue({user,password,remember:true})
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const {user,password,remember} = values
        remember?localStorage.setItem('user',JSON.stringify({user,password})):localStorage.removeItem('user')
        this.login({user,password})
      }
    })
  }

  setFromData = user => {
    this.props.form.setFieldsValue({user,password:'123456'})
  }

  login = formVal=> {
    const {handleLogin} = this.props
    // 登录完成后 发送请求 调用接口获取用户信息
    this.setState({loading:true})
    handleLogin(formVal).then(status => {
      this.setState({loading:false})
      status && this.getUserInfo()
    })
  }

  getUserInfo = ()=> {
    this.setState({loading:true})
    const { getUserInfo} = this.props,{history} = this.context.router
    // 发送请求 调用接口获取用户信息
    getUserInfo().then(status =>{
      this.setState({loading:false})
      status && history.replace('/dashboard')
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (

        <div className='login-container'>
          <Particles
              params={{
                particles
              }}
              style={{width:'100%',height:'100%'}}
          />
          <Form
              className='content'
              onSubmit={this.handleSubmit}
          >
            <Spin
                spinning={this.state.loading}
                tip='加载中...'
            >
              <FormItem>
              {getFieldDecorator('user', {
                rules: [{ required: true, message: '请输入账号!' }],
              })(
                <Input
                    placeholder="User"
                    prefix={
                      <Icon
                          style={{ color: 'rgba(0,0,0,.25)' }}
                          type="user"
                      />}

                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }]
              })(
                <Input
                    placeholder="Password"
                    prefix={
                      <Icon
                          style={{ color: 'rgba(0,0,0,.25)' }}
                          type="lock"
                      />}
                    type="password"
                />
              )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked'
                })(
                  <Checkbox>记住密码</Checkbox>
                )}
                <a className='login-form-forgot'>忘记密码</a>
                <Button
                    className='login-form-button'
                    htmlType='submit'
                    type='primary'
                >
                  登录
                </Button>
            </FormItem>
            <FormItem>
              <div className='row-container'>
                  <Button
                      className='user-type-button'
                      onClick={this.setFromData.bind(this,'admin')}
                  >
                    管理员
                  </Button>
                  <Button
                      className='user-type-button'
                      onClick={this.setFromData.bind(this,'normal')}
                  >
                    普通用户
                  </Button>
              </div>
            </FormItem>

          </Spin>

         </Form>
        </div>


    )
  }
}
const mapDispatchToProps = ({
  handleLogin: params => login(params),
  getUserInfo: () => getUserInfo()
})

export default connect(state => ({collapsed: state.UI.taglist}), mapDispatchToProps)(Form.create()(Login))

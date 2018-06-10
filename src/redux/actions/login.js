import api from '@/axios'
import { message } from 'antd'
import { SET_TOKEN,SET_USERINFO,DELETE_TOKEN } from './type.js'
const login = params => dispatch => {
  /**
   * 登录需要发送两次请求，第一次获取token
   * 第二次请求再把token传给后台，获取用户信息
   **/
  return new Promise(reslove => {
    api.post('/login', params).then(res => {
      // 账号密码正确，不发送第二次请求
      if (res.data.success) {
        //设置全局token并缓存token
        dispatch({
          type: SET_TOKEN,
          playload: res.data.datas.token
        })
        localStorage.setItem('token', res.data.datas.token)
      }
      reslove(res.data.success)
    })
  })
}

const deleteToken = ()=> dispatch=>{
  localStorage.removeItem('token')
  dispatch({
    type: DELETE_TOKEN
  })
  message.success('已退出登录')
  window.location = '#/login'
}

const getUserInfo = () => dispatch => {
  return new Promise(reslove=> {
    api.post('/getUserInfo').then(res => {

      // 获取用户信息成功，将用户信息保存到全局状态树

      if (res.data.success) {

        localStorage.setItem('userInfo', JSON.stringify(res.data.datas))

        dispatch({
          type: SET_USERINFO,
          playload: res.data.datas
        })
      }
      reslove(res.data.success)
    })
  })
}
export {
  login,
  getUserInfo,
  deleteToken
}
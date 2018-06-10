import axios from 'axios'
import store from '@/redux/store'
import {message} from 'antd'
const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000
})

//请求拦截
api
  .interceptors
  .request
  .use(function (config) {
    // 在发送请求之前做些什么
    // 通过reudx的store拿到拿到全局状态树的token ，添加到请求报文，后台会根据该报文返回status
    const token = store.getState().user.token || localStorage.getItem('token')
    config.headers['X-Token'] = token
    return config

  }, function (error) {
    // 对请求错误做些什么
    message.error(error)

    return Promise.reject(error)
  })

// 添加响应拦截器
api
  .interceptors
  .response
  .use(function (response) {
    // 对响应数据做点什么

    if (response.data.success === false) {

      message.error(response.data.message)
    }

    return response

  }, function (error) {
    // 对响应错误做点什么
    if (error.response) {


      if (error.response.status === 401) {
        // 如果返回401 即没有权限，跳到登录页重新登录
         message.error(error.response.data.message)

         window.location.href = '#/login'

      }
    }

    return Promise.reject(error)
  })

export default api

import React, { Component } from 'react'
import {Provider} from 'react-redux'
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import Layout from './views/layout'
import Login from './views/login'
import store from '@/redux/store'

class App extends Component {
  // 监听路由
  componentWillMount(){
    window.onhashchange= ()=>{
      if(window.location.hash!=='/login'){
        if(localStorage.getItem('token')===null){
          window.location.href = '#/login'
        }
      }
    }
  }
  render(){
    return (
      <Provider store={store} >
        <Router>
          <Switch>
            <Route
                component={Login}
                exact
                path='/login'
            />
            <Route
                component={Layout}
                path='/'
            />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App

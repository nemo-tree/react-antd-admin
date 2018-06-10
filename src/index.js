import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const render = Component => {   // 增加react-hot-loader保持状态刷新操作，如果不需要可去掉并把下面注释的打开
  ReactDOM.render(
      <AppContainer>
          <Component />
      </AppContainer>
      ,document.getElementById('root')
  )
}

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  // 隐藏You cannot change <Router routes> it will be ignored 错误提示
  // react-hot-loader 使用在react-router 3.x上引起的提示，react-router 4.x不存在
  // 详情可参照https://github.com/gaearon/react-hot-loader/issues/298
  const orgError = console.error // eslint-disable-line no-console
  console.error = (...args) => { // eslint-disable-line no-console
      if (args && args.length === 1 && typeof args[0] === 'string' && args[0].indexOf('You cannot change <Router routes>') > -1) {
          // React route changed
      } else {
          // Log the error as normally
          orgError.apply(console, args)
      }
  }
  module.hot.accept('./App', () => {
      render(App)
  })
}

registerServiceWorker()

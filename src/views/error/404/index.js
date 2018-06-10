import React from 'react'
import { Button ,Row,Col} from 'antd'
import CSSModules from 'react-css-modules'
import styles from '../index.module.less'

const Error404 = props=>{

  const goback = ()=>{
    const {history} = props
    history.push('/dashboard')
  }
  return (
    <Row
        gutter={24}
        styleName='wrap-404'
    >
      <Col
          offset={2}
          sm={10}
          styleName='img-box'
          xs={20}
      />

      <Col
          offset={2}
          sm={10}
          styleName='content'
          xs={20}
      >
        <h1>404</h1>
        <p styleName='desc'>抱歉，你访问的页面不存在</p>
        <div>
          <Button
              onClick={goback}
              type='primary'
          >返回首页</Button>
        </div>
      </Col>

    </Row>
  )
}



export default CSSModules(Error404,styles)
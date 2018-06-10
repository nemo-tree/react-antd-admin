import React from 'react'
import {Row, Col, Icon} from 'antd'
import CountUp from 'react-countup'
import CSSModules from 'react-css-modules'
import styles from '../index.module.less'
const PanelGroup = props => {
  const chartList = [
    {
      type: 'NewVisits',
      className: 'people',
      icon: 'user-add',
      num: 13600,
      color: '#BFA3A9'
    }, {
      type: 'Messages',
      className: 'message',
      icon: 'message',
      num: 12400,
      color: '#5DA0F0'
    }, {
      type: 'Purchases',
      className: 'money',
      icon: 'pay-circle',
      num: 498200,
      color: '#BF6883'
    }, {
      type: 'Shoppings',
      className: 'shoppingCard',
      icon: 'shopping-cart',
      num: 29600,
      color: '#f6ab40'
    }
  ]

  return (
    <div styleName='panel-group-container'>
      <Row gutter={12}>
        {chartList.map((ele, i) => <Col key={i}
            lg={6}
            md={12}
            onClick={props.handleSetLineChartData.bind(this,ele.type)}
            xs={24}
                                   >
          <div styleName='content'>
            <div className={styles[ele.className]}
                styleName='icon-wrap'
            >
              <Icon
                  style={{fontSize:55,color:ele.color}}
                  type={ele.icon}
              />
            </div>
            <div styleName='description'>
              <p styleName='text'>
                {ele.type}
              </p>
              <CountUp
                  end={ele.num}
                  start={0}
                  styleName='num'
              />
            </div>
          </div>
        </Col>)
        }

      </Row>
    </div>
  )
}

export default CSSModules(PanelGroup, styles)
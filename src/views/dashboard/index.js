import React, {Component} from 'react'
import {Row, Col} from 'antd'
import PanelGroup from './component/PanelGroup'
import {raddarChartData,barChartData,pieChartData,lineChartData} from './chartData'
import CommonChart from '@/components/chart'
import LineChart from './component/LineChart'
import AntdCard from './component/AntdCard'


class Dashboard extends Component {

  state = {
    lineChartDataVal: lineChartData['NewVisits']
  }

  handleSetLineChartData = type => {
    this.setState({lineChartDataVal: lineChartData[type]})
  }

  render() {
    return (
      <div>
        <PanelGroup handleSetLineChartData={this.handleSetLineChartData}/>

        <LineChart
            chartData={this.state.lineChartDataVal}
            styles={{
              padding: 12,
              backgroundColor: '#fff',
              marginBottom: '25px'
            }}
        />
        <Row gutter={12}>
          <Col lg={8}
              span={8}
              xs={24}
          >

          <CommonChart
              chartData={raddarChartData}
              style={{
                  marginBottom: '25px'
                }}
          />

          </Col>
          <Col lg={8}
              span={8}
              xs={24}
          >
            <CommonChart
                chartData={pieChartData}
                style={{
                  marginBottom: '25px'
                }}
            />
          </Col>
          <Col lg={8}
              span={8}
              xs={24}
          >
            <CommonChart
                chartData={barChartData}
                style={{
                marginBottom: '25px'
              }}
            />
          </Col>
        </Row>

        <AntdCard/>
      </div>
    )
  }

}
export default Dashboard
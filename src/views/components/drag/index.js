import React, { Component } from 'react'
import LeftItem from './components/LeftItem'
import RightItem from './components/RightItem'
import {getListData} from './server'
class Drag extends Component {
  state = {
    list1: [],
    list2:[]
  }

  componentWillMount(){
    getListData().then(data=>{
      const {list1,list2} = data
      this.setState({list1,list2})
    })
  }
  componentWillUnmount () {
    // componentWillMount进行异步操作时且在callback中进行了setState操作时，需要在组件卸载时清除state
    this.setState = ()=>{
      return
    }
  }
  render () {
    return (
      <div className='draggable-wrap'>
        <LeftItem list={this.state.list1}/>
        <RightItem list={this.state.list2}/>
      </div>
    )
  }
}

export default Drag
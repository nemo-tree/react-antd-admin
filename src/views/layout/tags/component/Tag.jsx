import React,{Component} from 'react'
import TagList from '@/components/taglist'
import {addTaglist} from '@/redux/actions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Tags extends Component {

  componentWillMount(){
    const { addTaglist } = this.props,
         currentPath = this.props.history.location.pathname  //当前页面路径
    // 当页面初始化时，添加tag
    const catchTaglist = JSON.parse(localStorage.getItem('taglist'))

    //  先给taglist添加当前页面对应的tag
    addTaglist(currentPath)
    // 如果缓存中有taglist列表 读取改列表并添加
    if(catchTaglist && catchTaglist.length) {
      catchTaglist.forEach(ele=>{addTaglist(ele.path)})
    }
  }

  render(){
     const {taglist} = this.props,
     currentPath = this.props.history.location.pathname
      return (
          <ul className='tags-wrap'>
          {
            taglist.map(ele=>(
              <li key={ele.path}>
                <TagList
                    path={ele.path}
                    selected={ele.path===currentPath?true:false}
                    title={ele.title}
                />
              </li>
            ))
          }
          </ul>
      )
  }
}
const mapStateToProps = state => ({taglist: state.UI.taglist})
const mapDispatchToProps = dispatch => ({
  addTaglist: playload => {
    dispatch(addTaglist(playload))
  }
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Tags))

import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Tag } from 'antd';
import {cutTaglist} from '@/redux/actions'

const TagList = (props,context)=>{

  const {title,path} = props,currentPath = context.router.history.location.pathname

  const handleClose = path=> {

    const {cutTaglist,taglist} = props,{history} = context.router
    const length = taglist.length

      // 如果关闭的是当前页，跳转到最后一个tag
      if(path === currentPath){
        history.push(taglist[length - 1].path)
      }
       // 如果关闭的是最后的tag ,且当前显示的也是最后的tag对应的页面，才做路由跳转
      if(path===taglist[length-1].path && currentPath ===taglist[length-1].path){
        // 因为cutTaglist在最后执行，所以跳转到上一个tags的对应的路由，应该-2
        if(length - 2 >0){
          history.push(taglist[length - 2].path)
        }else if(length===2) {
          history.push(taglist[0].path)
        }
      }

      // 先跳转路由，再修改state树的taglist
      cutTaglist(path)

  }

  const handleClick =(path,event)=>{

    const {history} = context.router
    // 如果点击的是关闭按钮，或点击的tag是当前页面，不执行
    if(event.target.tagName==='I' || currentPath===path) return
    history.push(path)
  }

  return (
    <Tag
        afterClose={()=>{handleClose(path)}}
        closable
        color={currentPath===path?'geekblue':'gold'}
        onClick={e=>handleClick(path,e)}
    >{title}</Tag>
  )
}

TagList.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = state => ({taglist: state.UI.taglist})
const mapDispatchToProps = dispatch => ({
  cutTaglist: playload => {
    dispatch(cutTaglist(playload))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(TagList)

import * as type from './type'
import { menus } from '@/router/menus'

// 改变左侧菜单栏宽度（是否显示）
const changeIsMobile = playload => ({
  type: type.CHANGE_ISMOBILE,
  playload
})

// 改变左侧菜单栏宽度（展开或者收缩）
const changeCollapsed = playload => ({
  type: type.CHANGE_COLLAPSED,
  playload
})

// 减少tags标签页
const cutTaglist = playload => ({
  type: type.CUT_TAGLIST,
  playload
})
// 清空tags标签页
const emptyTaglist = {
  type: type.EMPTY_TAGLIST
}

// 增加tags标签页
const addTaglist = playload => (dispatch, getState) => {

  const currentTaglist = getState().UI.taglist

   // 如果当前taglist已存在待添加成员，不执行
  if (currentTaglist.filter(ele=>ele.path ===playload).length) return

  // 如果当前taglist数量>=10,先删除第一个tag，再添加，taglist最多只有10个成员
  if (currentTaglist.length >= 10) {
    dispatch(cutTaglist(currentTaglist[0].path))
  }


  function handleDispatch(obj){
    dispatch({
      type: type.ADD_TAGLIST,
      playload: obj
    })
  }

  menus.forEach(ele=>{
    if(ele.path===playload) {
      handleDispatch(ele)
    }else if(ele.children){
      ele.children.forEach(ele2=>{
        if(ele2.path===playload){
          handleDispatch(ele2)
        }
      })
    }
  })
}


export {
  changeIsMobile,
  changeCollapsed,
  addTaglist,
  cutTaglist,
  emptyTaglist
}

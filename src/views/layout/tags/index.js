import React from 'react'
import {withRouter} from 'react-router-dom'
import Tag from './component/Tag'
import Dropdown from './component/Dropdown'

const TagsRow = ()=>{
    return (
      <div className='tags-row-wrap'>
          <Tag/>
          <Dropdown/>
      </div>
    )
}

export default withRouter(TagsRow)

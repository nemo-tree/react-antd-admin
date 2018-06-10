import React from 'react'
import {BackTop} from 'antd'
import Type1 from '@/components/backtotop/Type1'
import Type2 from '@/components/backtotop/Type2'
import Type3 from '@/components/backtotop/Type3'
import Type4 from '@/components/backtotop/Type4'


const BackToTop = ()=>{
  return (
    <div
        style={{height:2000}}
    >
      <div style={{display:'flex',justifyContent:'space-around'}}>
        <Type1/>
        <Type2/>
        <Type3/>
        <Type4/>
      </div>

      <BackTop>
         <Type1/>
      </BackTop>

    </div>
  )
}

export default BackToTop
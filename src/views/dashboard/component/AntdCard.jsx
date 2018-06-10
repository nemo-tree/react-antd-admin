import React from 'react'
import {Card, Avatar} from 'antd'
const {Meta} = Card;

const AntdCard = () => {

  return (
    <Card
        className='shadow-radius'
        cover={<img
            alt='example'
            src='http://bimgs.plmeizi.com/images/bing/2018/WhiteTiger_ZH-CN12326957209_1920x1080.jpg'
               />}
    >

      <Meta
          avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
          description='尽管在野外有孟加拉白虎出没的记载，但它们非常罕见。这可能是因为孟加拉白虎的毛皮里缺少色素，这种天生的缺陷降低了它们在自然界的存活率。如今，人们看到的孟加拉白虎都是动物园的园宝。孟加拉白虎在许多文化中具有很强的神话色彩，包括在韩国，它是力量和信任的象征。因此韩国奥林匹克委员会选择了孟加拉白虎作为2018年冬季奥运会的吉祥物之一。'
          title='孟加拉白虎'
      />
    </Card>
  )
}
export default AntdCard
import React from 'react'
import { Icon} from 'antd'

const styles = {
  backgroundColor: '#fff',
  width: 40,
  height: 40,
  borderRadius: 20,
  cursor: 'pointer',
  transition: '.3s',
  boxShadow: '0 0 6px rgba(0,0,0,.12)',
  zIndex: 5,
  marginBottom: 30
}
const iconStyles = {
  color: '#409eff',
  display: 'block',
  lineHeight: '40px',
  textAlign: 'center',
  fontZize: 18
}
const Type1 = () => {
  return (
      <div style={styles}>
        <Icon
            style={iconStyles}
            type="caret-up"
        />
      </div>
  )
}

export default Type1
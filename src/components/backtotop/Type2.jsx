import React from 'react'
import { Icon} from 'antd'

const styles = {
  backgroundColor: '#f6f9fa',
  width: 45,
  height: 45,
  borderRadius: 4,
  cursor: 'pointer',
  transition: '.3s',
  boxShadow: '0 0 6px rgba(0,0,0,.12)',
  zIndex: 5,
  border:'1px solid #e5e9ef'
}

const iconStyles = {
  color: '#99a2aa',
  display: 'block',
  lineHeight: '45px',
  textAlign: 'center',
  fontZize: 24,
  fontWeight:700
}

const Type2 = () => {
  return (
      <div style={styles}>
        <Icon
            style={iconStyles}
            type="up"
        />
      </div>
  )
}

export default Type2
import './Panel.css'

import React from 'react'

const Panel = ({header, children, noPadding, width, overflowToTop}) => {
  let className = 'panel'
  if (!!noPadding) className += ' no-padding'
  if (!!overflowToTop) className += ' overflow-to-top'

  return (
    <div className={className} style={{width}}>
      {!!header && <div className="panel-header">{header}</div>}
      <div className="panel-content">{children}</div>
    </div>
  )
}

export default Panel

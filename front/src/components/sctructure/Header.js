import './Header.css'

import { Container } from 'react-bootstrap';
import React from 'react'

const HeaderTitle = ({title, subtitle}) => {
  if (!title) return false

  return (
    <div className="header-title-wrapper">
      <h1>{title}</h1>
      <small>{subtitle}</small>
    </div>
  )
}

const Header = ({children, title, subtitle, bgImage, overlay, fullScreen}) => {
  const bgFullPath = bgImage || process.env.PUBLIC_URL + 'home-header-bg.png'

  let className = 'header'

  if (fullScreen) className += ' full-screen'

  return (
    <div className={className} style={{backgroundImage: 'url(' + bgFullPath + ')'}}>
      <div className="content">
        <HeaderTitle title={title} subtitle={subtitle} />
        <Container>{children}</Container>
      </div>
      {overlay && <div className="overlay" />}
    </div>
  )
}

export default Header

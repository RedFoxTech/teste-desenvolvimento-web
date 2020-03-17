import './Logo.css'

import React from 'react'

const Logo = ({onClick}) => (
  <a className="logo-wrapper" onClick={onClick}>
    <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
  </a>
)

export default Logo

import './LabelValue.css'

import React from 'react'

import Text from './Text'

const LabelValue = ({label, value}) => (
  <div className="label-value">
    <small>{label}</small>
    <p>{value}</p>
  </div>
)

export default LabelValue

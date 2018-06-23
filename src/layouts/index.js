import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="REAL EXPERTS" />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

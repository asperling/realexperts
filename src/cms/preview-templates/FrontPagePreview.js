import React from 'react'
import PropTypes from 'prop-types'
import { FrontPageTemplate } from '../../templates/front-page'

const FrontPagePreview = ({ entry, widgetFor }) => (
  <FrontPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

FrontPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FrontPagePreview

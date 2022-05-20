import React from 'react'
import PropTypes from 'prop-types'
import { ResourcesFormsPageTemplate } from '../../templates/resources-forms-page'

const ResourcesFormsPagePreview = ({ entry, widgetFor }) => (
  <ResourcesFormsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ResourcesFormsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ResourcesFormsPagePreview

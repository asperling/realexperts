import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const FrontPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <div>
        <h1>
          Hey ho - {title}
        </h1>
        <PageContent content={content} />
      </div>
    </section>
  )
}

FrontPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const FrontPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <FrontPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

FrontPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FrontPage

export const frontPageQuery = graphql`
  query FrontPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const FrontPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
          {title}
        </h1>
        <PageContent className="content" content={content} />
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
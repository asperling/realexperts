import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  image,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section>
      {helmet || ''}
        <h1>
          {title}
        </h1>
        <p>{description}</p>
        <img src={image} />
        <PostContent content={content} />
        Tags: {tags}
        {tags ? (
          <div style={{ marginTop: `4rem` }}>
            <h4>Kategorien</h4>
            <p>
              {tags.map(tag => (
                <Link key={tag + `tag`}
                      to={`/tags/${kebabCase(tag)}/`}
                style={{ marginRight: "0.5rem" }}>
                  <span>{tag}</span>
                </Link>
              ))}
            </p>
          </div>
        ) : null}
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
  image: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      tags={post.frontmatter.tags}
      image={post.frontmatter.image}
      title={post.frontmatter.title}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        image 
      }
    }
  }
`

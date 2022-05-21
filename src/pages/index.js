import * as React from 'react'
import { Link,graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from "../components/layout"
import { heading } from '../components/layout.module.css'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home">
      <h1 className={heading}>
        Farhan Erooth
      </h1>
      <h2>My Blog Posts</h2>
      <p>My cool posts will go in here</p>
      <ul>
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <h2>
                <Link to={`/blog/${node.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted on {node.frontmatter.date} by {node.frontmatter.author}</p>
            </article>
          ))
        }
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          author
          date(formatString: "MMMM D, YYYY")
          name
          title
          datePublished(formatString: "MMMM D, YYYY")
        }
        id
        slug
      }
    }
  }
`

export default IndexPage

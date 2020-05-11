import React from 'react'
import { Link } from 'gatsby'


export default function Template({ data }) {
    const post = data.markdownRemark
    return (
        <div>
            <Link to='/blog'>Go Back</Link>
            <hr />
            <h1>{post.frontmatter.title}</h1>
            <h3>Posted by {post.frontmatter.author}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.html }} ></div>
        </div>
    )
}


//https://www.youtube.com/watch?v=6YhqQ2ZW1sc



// export const postQuery = graphql`
// query BlogPostByPath($path:String!){
  
//     allMarkdownRemark() {
//       edges {
//         node {
//           id
//           frontmatter {
//             path
//             title
//             date
//             author
//           }
//         }
//       }
//     }
    
// }
// `
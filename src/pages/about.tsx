// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = (props: PageProps) => (
  <Layout>
    <SEO title="About Page" />
    <p>Welcome to about page ({props.path})</p>
  </Layout>
)

export default AboutPage

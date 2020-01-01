import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Portfolio Landing Page</h1>
    <Link to="/CV/">CV</Link>
    <br></br>
    <Link to="/work/">Work</Link>
    <br></br>
    <Link to="/contact/">Contact</Link>
    <br></br>
  </Layout>
)

export default IndexPage

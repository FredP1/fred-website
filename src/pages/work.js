import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function Work(){
    return (
  <Layout>
    <SEO title="Work Page"/>
    <h1>Work Page</h1>
    <button>Change Title</button>
  </Layout>
    )
}
export default Work

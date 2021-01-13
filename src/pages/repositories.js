import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import {SectionIntro, ContainerLayout} from "../components/common";

const RepositoryPage = () => { 

  return (
    <Layout> 
      <SEO title="Something" />
      <ContainerLayout>
      </ContainerLayout>
    </Layout>
  )
}
export default RepositoryPage

// export const gitHubQuery = graphql`
//   {

//   }
// `
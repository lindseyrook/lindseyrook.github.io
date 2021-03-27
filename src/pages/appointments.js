import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import {Tag, ContainerLayout, WorkPost, Category, Intro, SubTitle, Title, Text} from "../components/common"

const WorkIndex = ({ data }) => {

  return (
    <>
      <Layout> 
        <SEO title="Showcases" />
        <Intro>
          <ContainerLayout>

            <Title>Add square link for booking here! This way Lindsey can customize everything she needs</Title>

            <SubTitle className="text-dark">
              Schedule an appointment!
            </SubTitle>

            

          </ContainerLayout>
        </Intro>
      </Layout>
    </>
  )
}

export default WorkIndex
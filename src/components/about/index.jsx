import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.webp" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle>Integrative Nutrition Health Coach</SubTitle>
            </div> 
            <div>
              <Title> Hello, I’m Lindsey Rook </Title>
              {/* <Text> I'm a digital Front End Developer hailing from <b className="text-primary lined-link">North Africa</b> living in Casablanca. </Text> */}
              <Text> I love the world and I'm a really cool person</Text>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About

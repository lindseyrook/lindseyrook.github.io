module.exports = {
  SiteTitle: 'Counter Current',
  Sitelogo: '#',
  SiteLogoText: 'Counter Current',
  SiteAuthor: 'Counter Current',
  SiteDescription: 'An innovative & enlivening whole-person approach to help you level up your well-being',
  defaultDescription: 'An innovative & enlivening whole-person approach to help you level up your well-being', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  SiteSocialLinks: {
    instagram: 'https://www.instagram.com/counter.current',
  },
  SiteAddress: {
    city: 'Casablanca',
    region: 'CurvaSud',
    country: 'Morocco',
    zipCode: 'ZipCode',
  },
  SiteContact: {
    email: 'countercurrentwellness@gmail.com',
    phone: 'phone number',
  },
  SiteCopyright: '2020',
};

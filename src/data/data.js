module.exports = {
  SiteTitle: 'Counter Current',
  Sitelogo: '#',
  SiteLogoText: 'Counter Current',
  SiteAuthor: 'Counter Current',
  SiteDescription: 'Inclusive Wellness Collective',
  defaultDescription: 'Inclusive Wellness Collective', 
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
    linkedin: 'https://www.linkedin.com/in/lindsey-r-7125a3105/',
  },
  SiteAddress: {
    city: 'Casablanca',
    region: 'CurvaSud',
    country: 'Morocco',
    zipCode: 'ZipCode',
  },
  SiteContact: {
    email: 'abdali.dahir@gmail.com',
    phone: 'phone number',
  },
  SiteCopyright: '2020',
};

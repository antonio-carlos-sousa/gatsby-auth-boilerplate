// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    // Update the page.
    createPage(page)
  }
}

// or we can use gatsby-plugin-create-client-paths this plugin do this work for us
// https://www.gatsbyjs.com/plugins/gatsby-plugin-create-client-paths/
// on this example i will use both

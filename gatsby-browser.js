/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react")

exports.onRouteUpdate = ({ location, prevLocation }) => {
    console.log("New pathname: ", location.pathname)
    console.log("Old pathname: ", prevLocation ? prevLocation.pathname : "Clients first time entering site.")
    if (prevLocation) {
        if (typeof window !== "undefined" && window.drift) {
            window.drift.page(location.pathname)
            console.log("Drift.page has be executed!")
            }
    }
  }


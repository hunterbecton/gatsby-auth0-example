// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import React from "react"
import { navigate } from "gatsby"
import { AuthProvider } from "react-use-auth"

export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="dev-s86rnuxa.auth0.com"
    auth0_client_id="zMYEhtQgkGDaKqAZN6obv1eU32D0SyJx"
  >
    {element}
  </AuthProvider>
)

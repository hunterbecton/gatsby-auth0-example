import React, { useEffect } from "react"
import { useAuth } from "react-use-auth"

const Auth0CallbackPage = () => {
  const { handleAuthentication } = useAuth()

  useEffect(() => {
    handleAuthentication()
  }, [])

  return <p>Logging in...</p>
}

export default Auth0CallbackPage

import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useCallback } from "react"
import GlobalLayout from "../components/templates/GlobalLayout"
import LoginLayout from "../components/templates/LoginLayout"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const renderLayouts = useCallback(() => {
    let layoutType = "GLOBAL_LAYOUT"
    if (router.pathname === "/login" || router.pathname === "/forgot") {
      layoutType = "LOGIN_LAYOUT"
    }

    if (layoutType === "LOGIN_LAYOUT") {
      return (
        <LoginLayout>
          <Component {...pageProps} />
        </LoginLayout>
      )
    }

    return (
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    )
  }, [router])
  return <>{renderLayouts()}</>
}

export default MyApp

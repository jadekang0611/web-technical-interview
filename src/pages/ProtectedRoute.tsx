import { useRouter } from "next/router"
import { useEffect, useState } from "react"

type ProtectedRouteProps = {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticated = localStorage.getItem("isAuthenticated")

      if (!isAuthenticated) {
        router.push("/login")
      } else {
        setIsAuthenticated(true)
      }
    }

    checkAuthentication()
  }, [router])

  if (isAuthenticated === null) {
    // Render nothing or a placeholder while the authentication status is being determined
    return null
  }

  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    return <>{router.push("/login")}</>
  }

  return <>{children}</>
}

export default ProtectedRoute

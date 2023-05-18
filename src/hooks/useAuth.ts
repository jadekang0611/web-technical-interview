import { useRouter } from "next/router"
import { useState } from "react"
import Users from "../../data/users.json"
import { UserAuthProps } from "./types"

export const useAuth = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState({})
  const [error, setError] = useState("")
  const router = useRouter()

  const authenticateUser = ({ userEmail, userPassword }: UserAuthProps) => {
    const user = Users.find(
      (user) => user.email === userEmail && user.password === userPassword
    )
    if (user) {
      setAuthenticatedUser(user)
      localStorage.setItem("authenticatedUser", JSON.stringify(user))
      localStorage.setItem("isAuthenticated", JSON.stringify(true))
      router.push("/")
    } else if (!userEmail) {
      setError("Email address is required.")
    } else if (!userPassword) {
      setError("Password is required.")
    } else if (!user) {
      setError("No account found with the credentials.")
    }
  }

  const logout = () => {
    setAuthenticatedUser({})
    localStorage.removeItem("authenticatedUser")
    localStorage.removeItem("isAuthenticated")
    router.push("/login")
  }

  return {
    authenticatedUser,
    authenticateUser,
    logout,
    error,
  }
}

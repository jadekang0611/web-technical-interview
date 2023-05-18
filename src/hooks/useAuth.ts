import { useRouter } from "next/router"
import { useState } from "react"
import Users from "../../data/users.json"
import { UserAuthProps } from "./types"

export const useAuth = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState({})
  const router = useRouter()

  const authenticateUser = ({ userEmail, userPassword }: UserAuthProps) => {
    const user = Users.find(
      (user) => user.email === userEmail && user.password === userPassword
    )
    if (user) {
      setAuthenticatedUser(user)
      localStorage.setItem("authenticatedUser", JSON.stringify(user))
      router.push("/")
    }
  }

  const logout = () => {
    setAuthenticatedUser({})
    localStorage.removeItem("authenticatedUser")
    router.push("/login")
  }

  return {
    authenticatedUser,
    authenticateUser,
    logout,
  }
}

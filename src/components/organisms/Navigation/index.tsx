import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import Logo from "../../../../public/static/revive-logo.png"
import { useAuth } from "../../../hooks/useAuth"
import { NavigationProps } from "./types"

const Navigation = ({ global }: NavigationProps) => {
  const { authenticatedUser, logout } = useAuth()

  useEffect(() => {
    console.log(authenticatedUser)
  })

  const handleLogout = () => {
    logout()
  }
  return (
    <nav className="mb-4">
      <ul className="flex justify-between items-center">
        <li>
          <Link href="/">
            <a>
              <Image
                src={Logo}
                alt="Revive Logo"
                className="w-full h-auto"
                width={150}
                height={41}
              />
            </a>
          </Link>
        </li>
        {authenticatedUser
          ? global && (
              <li>
                <Link href="/login">
                  <a onClick={handleLogout}>Sign Out</a>
                </Link>
              </li>
            )
          : global && (
              <li>
                <Link href="/login">
                  <a>Sign In</a>
                </Link>
              </li>
            )}
      </ul>
    </nav>
  )
}

export default Navigation

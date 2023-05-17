import Image from "next/image"
import Link from "next/link"

import Logo from "../../../../public/static/revive-logo.png"
import { NavigationProps } from "./types"

const Navigation = ({ global }: NavigationProps) => {
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
        {global ? (
          <li>
            <Link href="/login">
              <a>Sign in</a>
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  )
}

export default Navigation

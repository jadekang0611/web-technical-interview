import Navigation from "../../organisms/Navigation"
import { GlobalLayoutProps } from "./types"

const GlobalLayout = ({ children, className }: GlobalLayoutProps) => {
  return (
    <div className={`${className} mx-auto p-10 lg:px-40 `}>
      <Navigation global />
      <main>{children}</main>
    </div>
  )
}

export default GlobalLayout

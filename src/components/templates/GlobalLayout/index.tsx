import Navigation from "../../organisms/Navigation"
import { GlobalLayoutProps } from "./types"

const GlobalLayout = ({ children, className }: GlobalLayoutProps) => {
  return (
    <div className={`${className} container mx-auto p-4`}>
      <Navigation global />
      <main>{children}</main>
    </div>
  )
}

export default GlobalLayout

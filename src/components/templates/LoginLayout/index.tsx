import Image from "next/image"
import Navigation from "../../organisms/Navigation"
import { LoginLayoutProps } from "./types"

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <>
      <div className="block md:hidden p-4 pb-0">
        <Navigation global={false} />
      </div>
      <div className="flex flex-col-reverse md:flex-row h-screen">
        <div className="hidden md:block p-4 pb-0 absolute">
          <Navigation global={false} />
        </div>
        <div className="w-full h-full md:w-[60%] bg-white flex items-center justify-center">
          <div className="p-6">
            <h2 className="text-2xl mb-4">Sign In</h2>
            <div>{children}</div>
          </div>
        </div>
        <div className="w-full h-full md:w-[40%] flex justify-center items-center relative">
          <div className="max-w-lg max-auto h-full ">
            <Image
              src="/static/revive-signin-pg-img.jpeg"
              alt="Nice house"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginLayout

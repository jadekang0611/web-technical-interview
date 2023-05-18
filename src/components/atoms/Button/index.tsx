import { ButtonProps } from "./types"

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      type="submit"
      className="mt-4 px-6 py-2 text-white bg-[#19D1B2] rounded-sm hover:bg-[#14A38B] focus:outline-none w-full"
    >
      {children}
    </button>
  )
}

export default Button

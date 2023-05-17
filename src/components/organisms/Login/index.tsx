import Link from "next/link"
import Button from "../../atoms/Button"
import Input from "../../atoms/Input"

const LoginForm = () => {
  return (
    <div className="min-w-[300px] max-w-[420px]">
      <form>
        <div className="mb-6">
          <Input
            id="email"
            type="email"
            placeholder="Enter email"
            name="email"
          />
          {/* need error handling */}
        </div>
        <div className="field-row">
          <Input
            id="password"
            type="password"
            placeholder="Enter password"
            name="password"
          />
          {/* need error handling */}
        </div>
        <div className="mb-2">
          <Button>Log in</Button>
        </div>
        <div className="text-right text-gray-500">
          <Link href="/forgot">Forgot password?</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm

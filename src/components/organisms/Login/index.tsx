import Link from "next/link"
import { FormEvent, useState } from "react"
import { useAuth } from "../../../hooks/useAuth"
import Button from "../../atoms/Button"
import Input from "../../atoms/Input"

const LoginForm = () => {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const { authenticateUser, error } = useAuth()

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    authenticateUser({ userEmail, userPassword })
  }

  return (
    <div className="min-w-[300px] max-w-[420px]">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <Input
            id="email"
            type="email"
            placeholder="Enter email"
            name="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className="field-row">
          <Input
            id="password"
            type="password"
            placeholder="Enter password"
            name="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 mt-2 mb-2">{error}</p>}
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

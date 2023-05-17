import { InputProps } from "./types"

const Input = ({ placeholder, label, type, id, name }: InputProps) => {
  return (
    <div className="border w-full rounded-sm">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className="w-full p-2 rounded-sm"
        autoFocus={false}
        autoComplete="off"
        placeholder={placeholder}
        name={name}
        id={id}
        type={type}
      />
    </div>
  )
}

export default Input

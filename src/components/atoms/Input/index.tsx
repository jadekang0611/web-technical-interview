import { InputProps } from "./types"

const Input = ({
  placeholder,
  label,
  type,
  id,
  name,
  value,
  onChange,
  ...otherProps
}: InputProps) => {
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
        value={value}
        onChange={onChange}
        {...otherProps}
      />
    </div>
  )
}

export default Input

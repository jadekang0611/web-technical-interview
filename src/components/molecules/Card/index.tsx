import { CardPropsType } from "./types"

export const Card = ({ className, children }: CardPropsType) => {
  return (
    <div className={className ? className : `border rounded p-4`}>
      <h2>Card</h2>
      <div>{children}</div>
    </div>
  )
}

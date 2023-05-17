import { IconProp } from "@fortawesome/fontawesome-svg-core"

export type CardPropsType = {
  key?: string | number
  className?: string
  propImg: string
  propName: string
  address: string
  bedrooms: number
  bathrooms: number
  yearBuilt: number
  sqft: number
}

export type IconWrapperType = {
  data: string | number
  iconName: IconProp
  special?: boolean
}

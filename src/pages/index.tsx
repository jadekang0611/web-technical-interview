import type { NextPage } from "next"
import PropertyData from "../../data/homes.json"
import { Card } from "../components/molecules/Card"
import { useAuth } from "../hooks/useAuth"
import styles from "../styles/Home.module.css"

export type PropertyImgsType = {
  [key: number]: string
}

const Home: NextPage = () => {
  const { authenticatedUser } = useAuth()
  const propertyImgs: PropertyImgsType = {
    1: "/static/property1.jpg",
    2: "/static/property2.jpg",
    3: "/static/property3.jpg",
    4: "/static/property4.jpg",
  }

  if (!authenticatedUser) {
    return null
  }

  return (
    <div className={`${styles.container} pt-4`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PropertyData.map((property) => (
          <Card
            key={property.id}
            propName={property.address}
            address={`${
              property.city + ", " + property.state + " " + property.zipCode
            }`}
            propImg={propertyImgs[property.id]}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            yearBuilt={property.yearBuilt}
            sqft={property.sqft}
          />
        ))}
      </div>
    </div>
  )
}

export default Home

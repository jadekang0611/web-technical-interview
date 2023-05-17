import {
  faBath,
  faBed,
  faCalendarDays,
  faHouse,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { CardPropsType } from "./types"

export const Card = ({
  key,
  className,
  propImg,
  propName,
  address,
  bedrooms,
  bathrooms,
  yearBuilt,
  sqft,
}: CardPropsType) => {
  return (
    <div
      key={key}
      className={
        className
          ? className
          : "relative bg-white rounded-2xl overflow-hidden w-full mb-4 h-[300px] shadow-md"
      }
    >
      <div>
        <Image
          src={propImg}
          alt="Property Image"
          className="w-full h-40 object-cover"
          layout="fill"
        />
      </div>
      <div className="p-4 rounded-2xl overflow-hidden absolute bottom-0 bg-white w-[100%]">
        <div className="flex justify-between items-center">
          <h2 className="text-black text-2xl font-bold">{propName}</h2>
          <button className="bg-[#56caae] rounded-md w-10">
            <ChevronRightIcon className="h-10 w-6 text-white m-auto hover-pointer" />
          </button>
        </div>
        <p className="text-[#7779ab] font-bold mb-2">{address}</p>
        <div className="flex justify-between items-center">
          <div className="flex  items-center">
            <FontAwesomeIcon icon={faBed} color="#7779ab" />
            <p className="p-1 text-[#7779ab]">{bedrooms}</p>
          </div>
          <div className="flex  items-center">
            <FontAwesomeIcon icon={faCalendarDays} color="#7779ab" />
            <p className="p-1 text-[#7779ab]">{yearBuilt}</p>
          </div>
          <div className="flex  items-center">
            <FontAwesomeIcon icon={faBath} color="#7779ab" />
            <p className="p-1 text-[#7779ab]">{bathrooms}</p>
          </div>
          <div className="flex  items-center">
            <FontAwesomeIcon icon={faHouse} color="#7779ab" />
            <p className="p-1 text-[#7779ab]">{sqft} sqft</p>
          </div>
        </div>
      </div>
    </div>
  )
}

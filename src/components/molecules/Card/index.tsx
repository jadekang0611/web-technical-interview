import {
  faBath,
  faBed,
  faCalendarDays,
  faHouse,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { CardPropsType, IconWrapperType } from "./types"

const IconWrapper = ({ data, iconName, special }: IconWrapperType) => {
  return (
    <div className="flex items-center">
      <FontAwesomeIcon icon={iconName} color="#7779ab" />
      {special ? (
        <p className="p-1 text-[#7779ab]">{data.toLocaleString()} sqft</p>
      ) : (
        <p className="p-1 text-[#7779ab]">{data}</p>
      )}
    </div>
  )
}

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
          : "relative bg-white rounded-2xl overflow-hidden w-full mb-4 min-h-[500px] shadow-md"
      }
    >
      <div>
        <Image
          src={propImg}
          alt="Property Image"
          className="w-full h-[40%] object-cover"
          layout="fill"
        />
      </div>
      <div className="overview p-6 rounded-2xl overflow-hidden absolute bottom-0 bg-white w-[100%]">
        <div className="flex justify-between items-center">
          <h2 className="text-black text-md md:text-xl lg:text-xl font-bold">
            {propName}
          </h2>
          <button className="bg-[#56caae] rounded-md w-10 h-10 md:w-6 md:h-6">
            <ChevronRightIcon className="h-10 w-6  md:w-6 md:h-6 text-white m-auto p-1" />
          </button>
        </div>
        <p className="text-[#7779ab] font-bold mb-2 text-md md:text-lg lg:text-lg">
          {address}
        </p>
        <div className="flex justify-between items-center flex-wrap">
          <IconWrapper data={bedrooms} iconName={faBed} />
          <IconWrapper data={yearBuilt} iconName={faCalendarDays} />
          <IconWrapper data={bathrooms} iconName={faBath} />
          <IconWrapper data={sqft} iconName={faHouse} special />
        </div>
      </div>
    </div>
  )
}

// import {
//   faBath,
//   faBed,
//   faCalendarDays,
//   faHouse,
// } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { ChevronRightIcon } from "@heroicons/react/24/solid"
// import Image from "next/image"
// import { CardPropsType, IconWrapperType } from "./types"

// const IconWrapper = ({ data, iconName, special }: IconWrapperType) => {
//   return (
//     <div className="flex items-center">
//       <FontAwesomeIcon icon={iconName} color="#7779ab" />
//       {special ? (
//         <p className="p-1 text-[#7779ab]">{data.toLocaleString()} sqft</p>
//       ) : (
//         <p className="p-1 text-[#7779ab]">{data}</p>
//       )}
//     </div>
//   )
// }

// export const Card = ({
//   key,
//   className,
//   propImg,
//   propName,
//   address,
//   bedrooms,
//   bathrooms,
//   yearBuilt,
//   sqft,
// }: CardPropsType) => {
//   return (
//     <div
//       key={key}
//       className={
//         className
//           ? className
//           : "relative bg-white rounded-2xl overflow-hidden w-full mb-4 min-h-[500px] shadow-md"
//       }
//     >
//       <div>
//         <Image
//           src={propImg}
//           alt="Property Image"
//           className="w-full h-[40%] object-cover"
//           layout="fill"
//         />
//       </div>
//       <div className="overview p-6 rounded-2xl overflow-hidden absolute bottom-0 bg-white w-[100%]">
//         <div className="flex justify-between items-center">
//           <h2 className="text-black text-md md:text-xl lg:text-2xl font-bold">
//             {propName}
//           </h2>
//           <button className="bg-[#56caae] rounded-md w-10 h-10 md:w-6 md:h-6">
//             <ChevronRightIcon className="h-10 w-6  md:w-6 md:h-6 text-white m-auto p-1" />
//           </button>
//         </div>
//         <p className="text-[#7779ab] font-bold mb-2 text-md md:text-lg lg:text-xl">
//           {address}
//         </p>
//         <div className="flex justify-between items-center flex-wrap">
//           <IconWrapper data={bedrooms} iconName={faBed} />
//           <IconWrapper data={yearBuilt} iconName={faCalendarDays} />
//           <IconWrapper data={bathrooms} iconName={faBath} />
//           <IconWrapper data={sqft} iconName={faHouse} special />
//         </div>
//       </div>
//     </div>
//   )
// }

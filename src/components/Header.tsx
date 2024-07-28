import { FaChevronLeft } from "react-icons/fa";
import propertyImage from "../assets/propertyImage.png";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      <div className="text-center font-semibold relative mb-4">
        <span className="hidden md:block absolute left-0 top-1 cursor-pointer">
          <FaChevronLeft />
        </span>
        Review
      </div>
      <div className="rounded-3xl border-black border-opacity-25 border-[1px] md:border-none">
        <div className="w-full">
          <img
            className="w-full rounded-t-3xl md:rounded-none h-[170px] md:h-[230px] object-cover"
            src={propertyImage}
            alt=""
          />
        </div>
        <div className="md:flex items-center justify-between p-3 md:px-0 md:py-4">
          <div className="md:w-[60%] relative pr-4">
            <h2 className="text-sm md:text-[18px] text-[#202020] font-semibold relative">
              Office space for lease in Adyar{" "}
              <span className="text-[#FBB337] ml-2 absolute top-[3px]">
                <RiVerifiedBadgeFill />
              </span>
            </h2>
            <p className="text-[#404040] text-[10px] md:text-base font-normal py-2">
              Sandy Paradise, 2nd main road, gandhi nagar, adyar, chennai
            </p>
            <div className="hidden md:block absolute top-1/4 right-0 w-[1px] h-1/2 bg-black"></div>
          </div>

          <div className="md:w-[40%] md:text-center">
            <h3 className="font-semibold text-[#202020] text-sm md:text-[18px]">
              Rs.15,000/ month
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { FaRegEdit } from "react-icons/fa";

interface DetailsProps {
  section: {
    title: string;
    details: {
      label: string;
      value: string;
    }[];
  };
}

const Details: React.FC<DetailsProps> = ({ section }) => {
  const isBasicdetails = section.title === "Basic Details";
  const isPhotodetails = section.title === "Photos";

  return (
    <section
      className={`${
        !isBasicdetails && "border-t-[1px]"
      } border-[#8E8E8E] py-4 my-4`}
    >
      <h2 className="text-[#2E368F] text-base md:text-[20px] font-semibold flex items-center justify-between">
        {section?.title}{" "}
        {!isBasicdetails && (
          <span className="cursor-pointer text-[#404040]">
            <FaRegEdit />
          </span>
        )}
      </h2>
      {isPhotodetails ? (
        <div className="mt-4 flex flex-wrap justify-between md:justify-start gap-y-4 md:gap-6">
          {section.details.map((item, i) => (
            <img
              key={i}
              className="w-[93px] h-[93px] md:w-[130px] lg:w-[170px] md:h-auto rounded-2xl"
              src={item.value}
              alt=""
            />
          ))}
        </div>
      ) : (
        <ul className="mt-3">
          {section.details.map((item, i) => (
            <li className="flex text-xs md:text-[16px] py-2" key={i}>
              <div className="w-1/2">{item.label}</div>
              <div className="w-1/2">{item.value}</div>
            </li>
          ))}
        </ul>
      )}

      {isBasicdetails && (
        <div className="mt-4 md:h-[230px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31099.627289120668!2d80.23868580331057!3d13.006773052893468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ed15c41681%3A0x6569ce967a249e83!2sAdyar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1720435320990!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default Details;

import { FaFacebook } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const SubBar = () => {
  return (
    <div className="h-6 mt-24 md:mt-32 bg-black text-white text-xs">
      <div className="max-w-7xl px-5 md:px-11 mx-auto flex justify-between items-center h-full">
        {/* left div*/}
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <a
              href="https://www.facebook.com/groups/961848802576888"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="h-4 w-4" />
            </a>
            <span className="hover:underline hidden md:block">
              <a
                href="https://www.facebook.com/groups/961848802576888"
                target="_blank"
                rel="noopener noreferrer"
              >
                Developer Community of Jhapa
              </a>
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <a href="mailto:mail@developercommunityjhapa">
              <IoMail className="h-4 w-4" />
            </a>
            <span className="hover:underline hidden md:block">
              <a href="mailto:mail@developercommunityjhapa">
                mail@developercommunityjhapa
              </a>
            </span>
          </div>
        </div>

        {/* right div */}
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <a href="tel:9746359126">
              <FaPhoneAlt className="h-4 w-4" />
            </a>
            <span className="hover:underline">
              <a href="tel:9746359126">9746359126</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBar;

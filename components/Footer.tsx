import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal, faSkype } from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faEllipsisH,
  faPhoneAlt,
  faShapes,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3  w-full pl-6 md:pl-4 space-x-0 lg:space-x-5 space-y-4 lg:space-y-0 mt-8 rounded">
      <div className="bg-white p-6 space-y-3 py-7">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faSkype} className="h-7 text-blue-400" />
            <h1>Skype</h1>
          </div>
          <FontAwesomeIcon icon={faEllipsisH} className="h-5 text-gray-400" />
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            <h1>Claudia Mills</h1>
            <u className="text-blue-400 font-bold">claudia.mills</u>
          </div>
          <div className="bg-blue-200 rounded-full p-3">
            <FontAwesomeIcon icon={faPhoneAlt} className="h-5 text-blue-500" />
          </div>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 lg:space-x-5 space-y-4 lg:space-y-0">
        <div className="bg-white p-6 space-y-3 py-7">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPaypal} className="h-7 text-blue-900" />
              <h1>PayPal</h1>
            </div>
            <FontAwesomeIcon icon={faEllipsisH} className="h-5 text-gray-400" />
          </div>
          <div className="flex justify-between items-center">
            <div className="">
              <h1 className="text-blue-400 font-bold">
                info@claudia.mills.com
              </h1>
            </div>
            <div className="bg-green-100 rounded-full p-3">
              <FontAwesomeIcon icon={faCheck} className="h-5 text-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-blue-200 flex flex-col text-blue-500 justify-center items-center space-y-3 h-28 lg:h-auto">
          <FontAwesomeIcon icon={faShapes} className="h-6 text-blue-500" />
          <h1 className="font-bold">Add Widget</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;

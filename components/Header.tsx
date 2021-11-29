import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretLeft,
  faEnvelope,
  faEllipsisH,
  faStar,
  faTimes,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faFirefoxBrowser } from "@fortawesome/free-brands-svg-icons";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full flex justify-between items-center pl-7 md:pl-5 lg:pl-0">
      <div className="space-x-1 flex">
        <div className="bg-white flex items-center h-6 px-2 rounded text-indigo-500 cursor-pointer">
          <FontAwesomeIcon icon={faCaretLeft} className="h-5" />
        </div>
        <div className="bg-white flex items-center h-6 px-2 rounded text-indigo-500 cursor-pointer">
          <FontAwesomeIcon icon={faCaretRight} className="h-5" />
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-3 py-2 px-3  text-blue-400 bg-blue-200 rounded cursor-pointer">
          <FontAwesomeIcon icon={faEnvelope} className="h-4 md:h-5" />
          <p className="font-bold md:text-base text-xs">Send Email</p>
        </div>
        <div className="hidden md:flex items-center space-x-3 py-2 px-3  text-blue-100 bg-blue-400 rounded cursor-pointer">
          <p className="font-bold md:text-base text-xs">Actions</p>
          <FontAwesomeIcon icon={faEllipsisH} className="h-4 md:h-5" />
        </div>
        <div
          onClick={handleClick}
          className="flex items-center space-x-1 bg-blue-100 p-1 rounded-full lg:hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="profileDisplay"
            className="h-10 w-10 rounded-full "
          />
          <FontAwesomeIcon icon={faCaretDown} className="h-3 text-blue-400" />
        </div>
      </div>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute top-16 w-screen bg-blue-100 p-5 rounded flex-col right-0`}
      >
        <div className="text-center flex flex-col items-center justify-center w-full border-b-2 border-gray-200 pb-8 space-y-2">
          <div className="flex md:hidden items-center space-x-3 my-3 py-2 px-3  text-blue-100 bg-blue-400 rounded cursor-pointer">
            <p className="font-bold md:text-base text-xs">Actions</p>
            <FontAwesomeIcon icon={faEllipsisH} className="h-4 md:h-5" />
          </div>
          <img
            src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="profileDisplay"
            className="h-28 w-28 rounded-full"
          />
          <h1 className="text-xl font-semibold">Claudia Mills</h1>
          <h1 className="font-bold text-gray-500">Product Manager @TechCore</h1>
          <div className="grid grid-cols-2 gap-1 place-items-center place-content-center">
            <div className="flex space-x-1 border-r-2 pr-6 border-gray-400">
              <FontAwesomeIcon icon={faStar} className="h-5 text-yellow-400" />
              <FontAwesomeIcon icon={faStar} className="h-5 text-yellow-400" />
              <FontAwesomeIcon icon={faStar} className="h-5 text-yellow-400" />
              <FontAwesomeIcon icon={faStar} className="h-5 text-yellow-400" />
              <FontAwesomeIcon icon={faStar} className="h-5 text-gray-400" />
            </div>

            <div className="flex space-x-2 items-center">
              <FontAwesomeIcon
                icon={faFirefoxBrowser}
                className="h-5 text-red-600"
              />
              <h1>128</h1>
            </div>
          </div>
        </div>

        <div className="space-y-3 border-b-2 border-gray-200 py-8">
          <h1 className="font-bold text-lg">Contact Information</h1>

          <div>
            <h1 className="text-blue-400">Email Address:</h1>
            <h1 className="font-bold">claudia.mills@technocore.com</h1>
          </div>

          <div>
            <h1 className="text-blue-400">Phone Number:</h1>
            <h1 className="font-bold">+919533480564</h1>
          </div>

          <div>
            <h1 className="text-blue-400">Address:</h1>
            <h1 className="font-bold">
              West End 45th Street, San Francisco,90123 California,US.
            </h1>
          </div>
        </div>

        <div className="space-y-3 pt-4">
          <h1>Tags</h1>
          <div className="flex flex-wrap -m-2">
            <div className="flex items-center space-x-3 py-1 px-3 text-sm text-blue-400 bg-blue-200 rounded m-2">
              {" "}
              <h1>Best tag</h1>{" "}
              <FontAwesomeIcon icon={faTimes} className="h-4" />{" "}
            </div>
            <div className="flex items-center px-3 text-sm space-x-3 text-blue-400 bg-blue-200 rounded m-2">
              {" "}
              <h1>Another tag </h1>{" "}
              <FontAwesomeIcon icon={faTimes} className="h-4" />{" "}
            </div>
            <div className="flex items-center space-x-3 py-1 px-3 text-sm text-blue-400 bg-blue-200 rounded m-2">
              {" "}
              <h1>Best tag</h1>{" "}
              <FontAwesomeIcon icon={faTimes} className="h-4" />{" "}
            </div>
            <div className="flex items-center px-3 text-sm space-x-3 text-blue-400 bg-blue-200 rounded m-2">
              {" "}
              <h1>Another tag </h1>{" "}
              <FontAwesomeIcon icon={faTimes} className="h-4" />{" "}
            </div>
            <div className="flex items-center space-x-3 py-1 px-3 text-sm text-blue-400 bg-blue-200 rounded m-2">
              {" "}
              <h1>Best tag</h1>{" "}
              <FontAwesomeIcon icon={faTimes} className="h-4" />{" "}
            </div>
            <div className="flex items-center px-3 text-sm space-x-3 text-blue-400 bg-blue-200 rounded m-2">
              {" "}
              <h1>Another tag </h1>{" "}
              <FontAwesomeIcon icon={faTimes} className="h-4" />{" "}
            </div>
            <div className="flex items-center space-x-3 py-1 px-3 text-sm text-blue-400 bg-blue-200 rounded m-2">
              {" "}
              <h1>Best tag</h1>{" "}
              <FontAwesomeIcon icon={faTimes} className="h-4" />{" "}
            </div>
            <div className="flex items-center px-3 text-sm space-x-3 text-blue-400 bg-blue-200 rounded m-2">
              {" "}
              <h1>Another tag </h1>{" "}
              <FontAwesomeIcon icon={faTimes} className="h-4" />{" "}
            </div>
          </div>
        </div>

        <div className="flex items-center text-center space-x-3 pt-5">
          <img
            src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="profileDisplay"
            className="h-10 w-10 rounded-full"
          />
          <h1 className="text-blue-400">
            Owner: <span className="text-black">Mark Hansen</span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;

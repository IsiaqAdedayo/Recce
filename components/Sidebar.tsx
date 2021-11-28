import {
  faBars,
  faBookOpen,
  faChartBar,
  faComments,
  faFileAlt,
  faHome,
  faSwatchbook,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className="bg-white md:w-14 xl:w-20 flex flex-col p-5 pt-8 space-y-16 text-blue-300 items-center">
      <FontAwesomeIcon icon={faBars} className="h-5 active:text-indigo-800 cursor-pointer" />
      <div className="space-y-8 ">
        <FontAwesomeIcon icon={faHome} className="h-5 text-indigo-800 cursor-pointer" />
        <FontAwesomeIcon icon={faChartBar} className="h-5 active:text-indigo-800 cursor-pointer" />
        <FontAwesomeIcon icon={faUserFriends} className="h-5 active:text-indigo-800 cursor-pointer" />
        <FontAwesomeIcon icon={faSwatchbook} className="h-5 active:text-indigo-800 cursor-pointer" />
        <FontAwesomeIcon icon={faComments} className="h-5 active:text-indigo-800 cursor-pointer" />
        <FontAwesomeIcon icon={faBookOpen} className="h-5 active:text-indigo-800 cursor-pointer" />
        <FontAwesomeIcon icon={faFileAlt} className="h-5 active:text-indigo-800 cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;

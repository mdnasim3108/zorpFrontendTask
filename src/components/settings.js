import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {AiOutlineLeftCircle } from "react-icons/ai"
const Settings = (props) => {
  const settings = [
    "Project",
    "API Access",
    "Billing",
    "Environments",
    "Content Stages",
    "Locales",
    "Audit Logs",
    "Team Members",
  ];
  return (
    <div className="lg:w-[20rem]   lg:h-full lg:border-r-2 border-r-0 lg:border-b-0 border-b-2 lg:flex hidden flex-col items-start px-3 py-4 relative settings">
      <h1 className="font-bold text-3xl ">Settings</h1>
      <div className="flex flex-col lg:w-[90%] w-full lg:mt-10 lg:items-stretch items-center lg:h-[50%] h-full ml-3 justify-between">
        {settings.map(setting => (
          <div className="w-full  text-left py-1 pl-2 pr-10 hover:bg-gray-100 transition-all duration-200 ease-in-out cursor-pointer rounded">
            <p className="text-lg font-bold font-inter">{setting}</p>
          </div>
        ))}
      </div>
        <AiOutlineLeftCircle className="text-gray-200 w-[1.5rem] h-[1.5rem] absolute lg:top-10 lg:right-[-13px] right-[50%] bottom-[-1rem] z-10 bg-white cursor-pointer"
        onClick={props.close}
        />
    </div>
  );
};
export default Settings;

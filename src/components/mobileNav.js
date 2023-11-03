import zorpLogo from "../assets/zorpLogo.jpg";
import userImg from "../assets/userImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineRightCircle } from "react-icons/ai";
import {
  faLayerGroup,
  faSliders,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import {
  faNoteSticky,
  faClipboard,
  faPlayCircle,
  faMessage,
  faUser,
  faCircleXmark
} from "@fortawesome/free-regular-svg-icons";
import { PiWebhooksLogoBold } from "react-icons/pi";
import Settings from "./settings";
import { useState } from "react";
const MobileNav = (props) => {
  const [showNav,setShowNav]=useState(false)
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
    <div className="w-full h-full  lg:hidden block">
      <div className={`fixed  flex bg-white w-[70%] h-full z-20 border-r-2 border-r-gray-200 ${!showNav?"left-[-999px]":"left-0"} transition-all duration-300 ease-in-out`}>
        <div
          className={` w-[20%]  relative  border-r-2 border-r-gray-300 h-full flex flex-col items-center justify-between  py-3`}
        >
          <img src={zorpLogo} className=" w-[3rem]" />
          <div className="bg-black flex items-center justify-center h-[2rem] w-[2rem] rounded-lg py-[0.5vh] font-semibold text-white lg:w-full">
            Pr
          </div>
          <FontAwesomeIcon
            icon={faLayerGroup}
            className="lg:w-full h-[1.5rem] text-gray-800 w-[3rem] "
          />
          <FontAwesomeIcon
            icon={faNoteSticky}
            className="lg:w-full h-[1.5rem] text-gray-800 w-[3rem]"
          />
          <FontAwesomeIcon
            icon={faClipboard}
            className="lg:w-full h-[1.5rem] text-gray-800 w-[3rem]"
          />
          <FontAwesomeIcon
            icon={faPlayCircle}
            className="lg:w-full h-[1.5rem] text-gray-800 w-[3rem]"
          />

          <PiWebhooksLogoBold className="w-[2rem] h-[2rem]      " />
          <FontAwesomeIcon
            icon={faSliders}
            className="lg:w-full h-[1.5rem] text-gray-800 w-[3rem] "
          />
          <FontAwesomeIcon
            icon={faBook}
            className="lg:w-full h-[1.5rem] text-gray-800 w-[3rem]"
          />
          <FontAwesomeIcon
            icon={faMessage}
            className="lg:w-full h-[1.5rem] text-gray-800 w-[3rem]"
          />
          <img
            src={userImg}
            className="lg:w-[3rem]  h-[2rem] rounded-full w-[2rem] "
          />
        </div>

        <div className=" w-[80%] bg-white h-full lg:border-r-2 border-r-0 lg:border-b-0 border-b-2 flex flex-col items-start pl-5 pt-[4rem] relative">
          <h1 className="font-bold text-2xl ">Settings</h1>
          <div className="flex flex-col  h-[50%] w-full items-start  justify-between">
            {settings.map((setting) => (
              <div className="w-full  text-left py-1 pl-2 pr-10 hover:bg-gray-100 transition-all duration-200 ease-in-out cursor-pointer rounded">
                <p className="text-sm font-bold font-inter">{setting}</p>
              </div>
            ))}
          </div>
        </div>

        <FontAwesomeIcon icon={faCircleXmark} className="absolute top-5 right-5 text-gray-500 w-[2rem] h-[2rem]" onClick={()=>setShowNav(false)}/>

      </div>


      <div className="w-full h-[7vh] bg-white shadow-lg fixed lg:hidden z-10 pr-10 flex justify-between lg:justify-end">
        <div className={` my-auto ml-5`}>
          <button
            type="button"
            className="text-gray-700 focus:outline-none "
            onClick={()=>setShowNav(true)}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {showNav && <div className="bg-black opacity-[0.5] w-full h-[200vh] absolute z-10" onClick={()=>setShowNav(false)}></div>}
    </div>
  );
};
export default MobileNav;

import zorpLogo from "../assets/zorpLogo.jpg";
import userImg from "../assets/userImg.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {AiOutlineRightCircle } from "react-icons/ai"
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
} from "@fortawesome/free-regular-svg-icons";
import {PiWebhooksLogoBold} from "react-icons/pi"
const Sidebar = (props) => {
  console.log(window.innerWidth);

  return (
    <div className={`lg:w-[4rem] w-full    lg:h-full h-[5rem] lg:border-r-2 lg:border-b-0 border-b-2 items-center  lg:flex hidden lg:flex-col  lg:justify-between   py-6 relative`}>
      <div className={`lg:h-[40%] lg:w-full  h-full  flex lg:flex-col items-center justify-between`}>
        <img src={zorpLogo} className=" w-[2.5rem] h-[2.5rem]" />
        <div className="bg-black flex items-center justify-center rounded-lg py-[0.5vh] font-semibold text-white  w-[2rem]">
          Pr
        </div>
        <FontAwesomeIcon
          icon={faLayerGroup}
          className="lg:w-full h-[1.5rem] text-gray-800 w-[10%]"
        />
        <FontAwesomeIcon
          icon={faNoteSticky}
          className="lg:w-full h-[1.5rem] text-gray-800 w-[10%]"
        />
        <FontAwesomeIcon
          icon={faClipboard}
          className="lg:w-full h-[1.5rem] text-gray-800 w-[10%]"
        />
        <FontAwesomeIcon
          icon={faPlayCircle}
          className="lg:w-full h-[1.5rem] text-gray-800 w-[10%]"
        />
      </div>
      <div className={`lg:h-[35%] h-full lg:w-full  flex lg:flex-col items-center justify-between`}>
        <PiWebhooksLogoBold className="w-[1.8rem] h-[1.8rem]  ml-7 lg:ml-0"/>
        <FontAwesomeIcon
          icon={faSliders}
          className="lg:w-full h-[1.5rem] text-gray-800 w-[10%]"
        />
        <FontAwesomeIcon
          icon={faBook}
          className="lg:w-full h-[1.5rem] text-gray-800 w-[10%]"
        />
        <FontAwesomeIcon
          icon={faMessage}
          className="lg:w-full h-[1.5rem] text-gray-800 w-[10%]"
        />
        <img src={userImg} className="  h-[2rem] rounded-full w-[2rem]"/>
      </div>
  
      {/* <img src={zorpLogo} className="lg:w-full w-[3rem] h-[3rem] flex-none" />
        <div className="bg-black flex items-center justify-center rounded-lg py-[0.5vh] font-semibold text-white lg:w-full w-[10%]">
          Pr
        </div>
        <FontAwesomeIcon
          icon={faLayerGroup}
          className="lg:w-full h-[1.5rem] text-gray-800 w-[3rem]"
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
        <PiWebhooksLogoBold className="w-[1.8rem] h-[1.8rem]  ml-7 lg:ml-0"/>
        <FontAwesomeIcon
          icon={faSliders}
          className="lg:w-full h-[1.5rem] text-gray-800 w-[3rem]"
        />
        <FontAwesomeIcon
          icon={faBook}
          className="lg:w-full h-[1.5rem] text-gray-800 w-[3rem]"
        />
        <FontAwesomeIcon
          icon={faMessage}
          className="lg:w-full h-[1.5rem] text-gray-800 w-[3rem]"
        />
        <img src={userImg} className="lg:w-[3rem]  h-[2rem] rounded-full w-[2rem]"/> */}
     

      {!props.showSettings && <AiOutlineRightCircle className="text-gray-200 w-[1.5rem] h-[1.5rem] absolute lg:top-10 lg:right-[-13px] bottom-[-1rem] right-[50%] z-10 bg-white cursor-pointer"
        onClick={props.open}
        />}
    </div>
  );
};
export default Sidebar;

import { useState } from "react";
import userImg from "../assets/userImg.jpg";
const LogData = (props) => {
  const [hovered, setHovered] = useState(false);
  let color;
  switch (props.action) {
    case "UPDATE":
      color = "#8b9fd0";
      break;

    case "CREATE":
      color = "#8baaa2";
      break;

    case "UNPUBLISH":
      color = "#987d67";
      break;
    case "DELETE":
      color = "#8a585b";
      break;

    default:
      break;
  }
  console.log(color)
  return (
    <div
      className={` w-full  h-[4.3rem]  ${props.index!==props.auditLogsData.length-1 && "border-b-[2px]"} flex items-start border-gray-300 pt-3 hover:bg-[#f2f1ff] transition-all duration-200 ease-in-out cursor-pointer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="lg:w-[20.6%] w-[40%] text-left inline-block  pl-[1rem]">
        <div className="w-full flex items-center">
          <img
            src={userImg}
            className="lg:w-[2.5rem] w-[1.5rem] rounded-full mr-2"
          />
          <div className="">
            <p className="lg:text-[16px] lg:font-[400] text-[13px] font-[200] font-inter">
              {props.user.userName}
            </p>
            <p className="lg:text-[16px] text-[13px] text-gray-500 font-[600] relative bottom-1">
              {props.user.userType}
            </p>
          </div>
        </div>
      </div>

      <div className="w-[15.6%] text-left lg:inline-block hidden ">
        <div className="bg-gray-100 px-2 py-1 w-max rounded">
          <p className="text-gray-500 font-semibold text-sm">
            {props.entityId.slice(0, 10) + "..."}
          </p>
        </div>
      </div>

      <div className="lg:w-[14.6%] w-[35%] lg:pl-0 pl-[1.5rem] text-left inline-block ">
        <p className={`  lg:text-[16px] text-[13px] font-inter`} style={{color}}>
          {props.action}
        </p>
      </div>

      <div className="w-[14.6%] text-left lg:inline-block hidden ">
        <p className="font-inter font-[600] text-[14px]">{props.type}</p>
      </div>

      <div className="w-[18.6%] text-left lg:inline-block hidden ">
        <p className="font-inter font-[600] text-[14px]">{props.Environment}</p>
      </div>

      <div className="lg:w-[15.6%] w-[25%] text-left inline-block xl:pl-[4rem] ">
        {hovered ? (
          <p className="text-[16px] text-violet-600 detail">View detail</p>
        ) : (
          <div className="w-full">
            <p className="font-semibold lg:text-[16px] text-[13px] w-max">
              {props.Timestamp.date}
            </p>
            <p className="text-gray-500 lg:text-[16px] text-[13px] relative bottom-1">
              {props.Timestamp.time}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default LogData;

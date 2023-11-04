import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState} from "react"
const TableFooter = (props) => {
  const [hovered,setHovered]=useState(false)
  return (
    <div className="w-full lg:h-[5%]  flex justify-between items-center lg:mt-0 mt-3 relative" >

      <p className="lg:text-[16px] text-[14px] text-gray-500 lg:font-[600] font-[400]">16 items</p>

      <div className="flex justify-between  lg:w-[300px] w-[150px] items-center">

        <p className={`font-inter ${!props.range.start>0?"opacity-[0.5]":"opacity-100"} cursor-pointer`} onClick={props.range.start>0 && props.back}>previous</p>

        <div className="flex justify-between flex-col lg:flex-row w-[40%] items-center">  
          <p>Page</p>

          <div className="border-2 border-gray-300 lg:w-[3rem] w-[2.2rem] rounded py-1 px-3 lg:pl-1">
                <p className="text-sm sm:text-lg">{props.range.start>0?2:1}</p>
          </div>

          <p>of 2</p>
        </div>

        <p className={`font-inter text-violet-700 ${props.range.end<16?"opacity-100":"opacity-[0.5]"} cursor-pointer`} onClick={props.range.end<16 && props.next}>Next</p>

      </div>

      <div className="flex lg:w-[110px] w-max flex-col lg:flex-row  lg:justify-between items-center" onClick={() => setHovered(!hovered)}
      >
        <p>show</p>

        <div className="border-2 border-gray-300 w-[4rem] rounded py-1 justify-around flex  items-center">
          <p>{props.data.length>8?16:8}</p>
          <FontAwesomeIcon icon={faCaretDown} className="w-[0.8rem] h-[0.8rem] text-gray-300" />
        </div>
      </div>

     {hovered && <div className="w-[4rem] h-[3rem] bg-white rounded border-2 border-gray-400 absolute right-0 lg:top-[-3rem] top-[-1rem]">
          <div className="border-b-2 h-[1.5rem] border-b-gray-300 text-center cursor-pointer " onClick={()=>{
            setHovered(!hovered)
            props.half()
          }}>
              <p>8</p>
          </div>
          <div className="border-b-2 h-[1.5rem] text-center cursor-pointer" onClick={()=>{
            setHovered(!hovered)
            props.full()
          }}>
              <p>16</p>
          </div>
      </div>} 
    </div>
  );
};
export default TableFooter;

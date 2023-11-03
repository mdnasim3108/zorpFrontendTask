import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const tableFooter = () => {
  return (
    <div className="w-full lg:h-[5%]  flex justify-between items-center lg:mt-0 mt-3">

      <p className="lg:text-[16px] text-[14px] text-gray-500 lg:font-[600] font-[400]">72 items</p>

      <div className="flex justify-between  lg:w-[300px] w-[150px] items-center">

        <p className="font-inter  opacity-[0.5]">previous</p>

        <div className="flex justify-between flex-col lg:flex-row w-[40%] items-center">  
          <p>Page</p>

          <div className="border-2 border-gray-300 lg:w-[3rem] w-[2.2rem] rounded py-1 px-3 lg:pl-1">
                <p className="text-sm sm:text-lg">1</p>
          </div>

          <p>of 3</p>
        </div>

        <p className="font-inter text-violet-700">Next</p>

      </div>

      <div className="flex lg:w-[110px] w-max flex-col lg:flex-row  lg:justify-between items-center">
        <p>show</p>

        <div className="border-2 border-gray-300 w-[4rem] rounded py-1 justify-around flex  items-center">
          <p>25</p>
          <FontAwesomeIcon icon={faCaretDown} className="w-[0.8rem] h-[0.8rem] text-gray-300" />
        </div>
      </div>
    </div>
  );
};
export default tableFooter;

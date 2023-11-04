import LogData from "./logData";
const tableBody = (props) => {

  return (
    <div className="w-full lg:h-[85%]  flex flex-col lg:mt-0 mt-3">
      <div className="h-[3rem] pt-2  bg-[#e6e6f0] w-full  border-[2px]  border-gray-300 rounded-t  ">

        <div className="lg:w-[20.6%] w-[40%] text-left inline-block  lg:pl-[5rem] pl-[3rem]">
          <p className="text-[12px] font-semibold font-inter">User</p>
        </div>

        <div className="w-[15.6%] text-left lg:inline-block hidden">
          <p className="text-[12px] font-semibold font-inter">Entity</p>
        </div>

        <div className="lg:w-[14.6%] w-[35%] lg:pl-0 pl-[1.5rem] text-left inline-block ">
          <p className="text-[12px] font-semibold font-inter">Action</p>
        </div>

        <div className="lg:w-[14.6%] w-[33.3%] text-left lg:inline-block hidden ">
          <p className="text-[12px] font-semibold font-inter">Type</p>
        </div>

        <div className="w-[18.6%] text-left lg:inline-block hidden ">
          <p className="text-[12px] font-semibold font-inter">Environment</p>
        </div>

        <div className="lg:w-[15.6%] w-[25%] text-left inline-block  xl:pl-[4rem] ">
          <p className="text-[12px] font-semibold font-inter">Timestamp</p>
        </div>
      </div>

      <div className="lg:h-[calc(100%-2rem)] border-x-2 border-b-2 border-gray-300  overflow-scroll">
        {
          props.data.map((data,index)=><LogData {...data} index={index} auditLogsData={props.data}/>)
        }
    
      </div>
      
    </div>
  );
};
export default tableBody;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FiExternalLink } from "react-icons/fi";
import Table from "./table";
const LogBody = () => {
  
  return (
    <div className="w-full lg:mt-0 mt-[2rem] h-full flex flex-col justify-between lg:px-10 px-0 pt-2 pb-3  transition-all duration-300 ease-in-out">

      <div className="w-full lg:h-[15%] flex flex-col justify-between px-5">
        <h1 className="lg:text-2xl text-lg font-bold font-inter lg:mt-0 mt-3">Audit Logs</h1>
        <p className="font-inter lg:text-lg text-sm text-gray-500">
          Monitor any changes made to your project,schema and content with audit
          logs.
        </p>
        <div className="flex items-center text-violet-400 cursor-pointer w-max lg:mt-0 mt-2">
          <p className="mr-1 font-inter lg:text-lg text-sm">Learn more</p>
          <FiExternalLink />
        </div>
        
      </div>

      <Table/>

    </div>
  );
};
export default LogBody;

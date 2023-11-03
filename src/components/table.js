import { BsFilter } from "react-icons/bs";
import TableBody from "./tableBody";
import TableFooter from "./tableFooter";
const Table = () => {
  return (
    <div className="w-full px-3 h-[81%] flex flex-col justify-between">
      <div className="lg:w-[80%] w-full border-[2.5px] border-gray-100 shadow lg:h-[6%] lg:py-0 py-1 flex items-center pl-4 rounded">
        <BsFilter className="w-[1.5rem] h-[1.5rem]  mr-1 text-gray-400" />
        <p className="font-inter text-gray-300">Filter</p>
      </div>

      <TableBody />
      <TableFooter />
    </div>
  );
};
export default Table;

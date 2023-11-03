import userImg from "../assets/userImg.jpg";
const logData = () => {
  return (
    <div className=" w-full  h-[4.3rem]  border-b-[2px] flex items-start border-gray-300 pt-3 hover:bg-[#f2f1ff] transition-all duration-200 ease-in-out cursor-pointer">
      <div className="lg:w-[20.6%] w-[40%] text-left inline-block  pl-[1rem]">

        <div className="w-full flex items-center">
          <img src={userImg} className="lg:w-[2.5rem] w-[1.5rem] rounded-full mr-2" />
          <div className="">
                <p className="lg:text-[16px] lg:font-[400] text-[13px] font-[200] font-inter">Fabian Beliza</p>
                <p className="lg:text-[16px] text-[13px] text-gray-500 font-[600] relative bottom-1">Owner</p>
          </div>
        </div>

      </div>

      <div className="w-[15.6%] text-left lg:inline-block hidden ">
        <div className="bg-gray-100 px-2 py-1 w-max rounded">
            <p className="text-gray-500 font-semibold text-sm">ck6h756e49...</p>
        </div>
      </div>

      <div className="lg:w-[14.6%] w-[35%] lg:pl-0 pl-[1.5rem] text-left inline-block ">
        <p className="text-blue-300 lg:text-[16px] text-[13px] font-inter">UPDATE</p>
      </div>

      <div className="w-[14.6%] text-left lg:inline-block hidden ">
        <p className="font-inter font-[600] text-[14px]">Webhook</p>
      </div>

      <div className="w-[18.6%] text-left lg:inline-block hidden ">
        <p className="font-inter font-[600] text-[14px]">Master</p>
      </div>

      <div className="lg:w-[15.6%] w-[25%] text-left inline-block xl:pl-[4rem] ">
        <p className="font-semibold lg:text-[16px] text-[13px] w-max">29 Jun 2020</p>
        <p className="text-gray-500 lg:text-[16px] text-[13px] relative bottom-1">21:37</p>
      </div>
    </div>
  );
};
export default logData;

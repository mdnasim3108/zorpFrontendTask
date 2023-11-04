import { BsFilter } from "react-icons/bs";
import TableBody from "./tableBody";
import TableFooter from "./tableFooter";
import { useState } from "react";
const Table = () => {
  const [range,setRange]=useState({start:0,end:8})
  const data = [
    {
      user: {
        userName: "Febian Beliza",
        userType: "owner",
      },
      entityId: "ck6h756e49abdef78",
      action: "UPDATE",
      type: "Webhook",
      Environment: "Master",
      Timestamp: { date: "29 jun 2020", time: "21:37" },
    },
    {
      user: {
        userName: "Nasim",
        userType: "admin",
      },
      entityId: "ck6h756e49abdef78",
      action: "CREATE",
      type: "model",
      Environment: "Staging",
      Timestamp: { date: "20 jan 2020", time: "20:30" },
    },
    {
      user: {
        userName: "Janarthanan",
        userType: "Editor",
      },
      entityId: "ck6h756e49abdef78",
      action: "UNPUBLISH",
      type: "Webhook",
      Environment: "Master",
      Timestamp: { date: "16 oct 2021", time: "15:37" },
    },
    {
      user: {
        userName: "Harish Kailash",
        userType: "owner",
      },
      entityId: "ck6h756e49abdef78",
      action: "UPDATE",
      type: "Content",
      Environment: "Staging",
      Timestamp: { date: "07 jul 2020", time: "15:24" },
    },
    {
      user: {
        userName: "Nagul Kembi",
        userType: "admin",
      },
      entityId: "ck6h756e49abdef78",
      action: "UPDATE",
      type: "Webhook",
      Environment: "Master",
      Timestamp: { date: "29 jun 2020", time: "21:37" },
    },
    {
      user: {
        userName: "Elayabharathi",
        userType: "contributor",
      },
      entityId: "ck6h756e49abdef78",
      action: "DELETE",
      type: "Content",
      Environment: "Master",
      Timestamp: { date: "29 jun 2020", time: "21:37" },
    },
    {
      user: {
        userName: "Thirumurugan",
        userType: "editor",
      },
      entityId: "ck6h756e49abdef78",
      action: "DELETE",
      type: "Webhook",
      Environment: "Staging",
      Timestamp: { date: "19 Feb 2020", time: "11:17" },
    },
    {
      user: {
        userName: "Krishnan",
        userType: "owner",
      },
      entityId: "ck6h756e49abdef78",
      action: "CREATE",
      type: "Content",
      Environment: "Staging",
      Timestamp: { date: "29 jun 2020", time: "21:37" },
    },
    {
      user: {
        userName: "Kulas",
        userType: "editor",
      },
      entityId: "ck6h756e49abdef78",
      action: "DELETE",
      type: "Content",
      Environment: "Master",
      Timestamp: { date: "30 jun 2021", time: "09:10" },
    },
    {
      user: {
        userName: "Deepak",
        userType: "owner",
      },
      entityId: "ck6h756e49abdef78",
      action: "CREATE",
      type: "Model",
      Environment: "Staging",
      Timestamp: { date: "29 jun 2020", time: "21:37" },
    },
    {
      user: {
        userName: "ganapathy",
        userType: "editor",
      },
      entityId: "ck6h756e49abdef78",
      action: "DELETE",
      type: "Content",
      Environment: "Master",
      Timestamp: { date: "29 jun 2020", time: "21:37" },
    },
    {
      user: {
        userName: "Gokul",
        userType: "editor",
      },
      entityId: "ck6h756e49abdef78",
      action: "DELETE",
      type: "Model",
      Environment: "Staging",
      Timestamp: { date: "29 jun 2020", time: "21:37" },
    },
    {
      user: {
        userName: "Badhri",
        userType: "contributor",
      },
      entityId: "ck6h756e49abdef78",
      action: "DELETE",
      type: "Model",
      Environment: "Staging",
      Timestamp: { date: "29 jun 2020", time: "21:37" },
    },
    {
      user: {
        userName: "Bharath",
        userType: "owner",
      },
      entityId: "ck6h756e49abdef78",
      action: "UPDATE",
      type: "Content",
      Environment: "Master",
      Timestamp: { date: "29 jun 2020", time: "21:37" },
    },
    {
      user: {
        userName: "Ajmal Fariz",
        userType: "editor",
      },
      entityId: "ck6h756e49abdef78",
      action: "CREATE",
      type: "Webhook",
      Environment: "Master",
      Timestamp: { date: "29 jun 2020", time: "21:37" },
    },
    {
      user: {
        userName: "Vikram",
        userType: "contributor",
      },
      entityId: "ck6h756e49abdef78",
      action: "CREATE",
      type: "Content",
      Environment: "Staging",
      Timestamp: { date: "29 jun 2020", time: "21:37" },
    },
  ];
  return (
    <div className="w-full px-3 h-[81%] flex flex-col justify-between">
      <div className="lg:w-[80%] w-full border-[2.5px] border-gray-100 shadow lg:h-[6%] lg:py-0 py-1 flex items-center pl-4 rounded">
        <BsFilter className="w-[1.5rem] h-[1.5rem]  mr-1 text-gray-400" />
        <p className="font-inter text-gray-300">Filter</p>
      </div>

      <TableBody data={data.slice(range.start,range.end)}/>
      <TableFooter next={()=>setRange({start:range.start+8,end:range.end+8})} back={()=>setRange({start:range.start-8,end:range.end-8})} range={range}
      half={()=>setRange({start:0,end:8})}
      full={()=>setRange({start:0,end:16})}
      data={data.slice(range.start,range.end)}
      />
    </div>
  );
};
export default Table;

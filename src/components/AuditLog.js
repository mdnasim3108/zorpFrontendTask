import Sidebar from "./sideBar";
import Settings from "./settings";
import LogBody from "./LogBody";
import { useState } from "react";
import MobileNav from "./mobileNav";
const AuditLog = () => {
  const [showSettings, setShowSettings] = useState(true);
  return (
    <div className="w-full h-screen flex lg:flex-row flex-col ">
      <MobileNav />

     

      <Sidebar showSettings={showSettings} open={() => setShowSettings(true)} />
      {showSettings && (
        <Settings
          showSettings={showSettings}
          close={() => setShowSettings(false)}
        />
      )}
      <LogBody showSettings={showSettings} />
    </div>
  );
};
export default AuditLog;

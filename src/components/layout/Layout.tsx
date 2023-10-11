import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-border-yellow">
      <div className="flex flex-col justify-center items-center  rounded-3xl w-95 h-95 bg-background-gray ">
        {children}
      </div>
    </div>
  );
};

export default Layout;

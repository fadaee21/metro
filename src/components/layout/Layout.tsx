import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-border-yellow">
      <div className="flex flex-col pt-20 items-center  rounded-3xl w-full  h-full scale-[0.95] bg-background-gray overflow-auto ">
        {children}
      </div>
    </div>
  );
};

export default Layout;

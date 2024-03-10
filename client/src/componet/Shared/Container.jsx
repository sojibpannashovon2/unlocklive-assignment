import React from "react";

const Container = ({ children }) => {
  return (
    // xl:px-20 md:px-10 sm:px-2 px-4
    <>
      <div className="max-w-[1920px] mx-auto  sm:px-2 px-2">{children}</div>
    </>
  );
};

export default Container;

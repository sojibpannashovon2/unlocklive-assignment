import React from "react";
import Container from "../Shared/Container";

const Schdule = () => {
  return (
    <>
      <Container>
        <div className=" xl:lg:md:h-[246px] bg-[#FFFAF2] xl:lg:md:flex justify-around">
          {/* width: 319px height: 326px top: 980px left: 264px border-radius: 0px,
          0px, 12px, 12px */}
          <div className="w-[319px] h-[326px] border-[2px] rounded-[12px] shadow-sm bg-[#86371C] schedule "></div>
          <div className=" my-auto text-center py-4 ">
            <h1 className="font-Abril text-[24px] font-semibold text-wood-bark">
              Our Opening Hours
            </h1>
            <p className="text-[16px] font-normal font-Value_Sans_Pro_one text-wood-bark">
              Mon - Sat: 07:00 - 18:00
            </p>
            <p className="text-[16px] font-normal font-Value_Sans_Pro_one text-wood-bark">
              Only Sun: 09:00 - 14:00
            </p>
          </div>
          <div className=" my-auto border-x-2 border-[#270A05] px-10 text-center py-4">
            <h1 className="font-Abril text-[24px] font-semibold text-wood-bark">
              Our Live Location
            </h1>
            {/* font-family: Value Sans Pro; font-size: 16px; font-weight: 400;
            line-height: 24px; letter-spacing: 0em; text-align: center; */}
            <p className="text-[16px] font-normal font-Value_Sans_Pro_one text-wood-bark text-center">
              848 A 28TH ST, Brooklyn
            </p>
            <p className="text-[16px] font-normal font-Value_Sans_Pro_one text-wood-bark text-center">
              New York, UK
            </p>
          </div>
          <div className=" my-auto text-center py-4">
            <h1 className="font-Abril text-[24px] font-semibold text-wood-bark">
              Book A Table Now
            </h1>
            <p className="text-[16px] font-normal font-Value_Sans_Pro_one text-wood-bark">
              +1 318-254-6849
            </p>
            <p className="text-[16px] font-normal font-Value_Sans_Pro_one text-wood-bark">
              +1 452-754-6579
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Schdule;

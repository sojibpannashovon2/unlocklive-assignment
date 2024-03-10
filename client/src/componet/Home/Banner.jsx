import React from "react";
import coffee from "../../assets/banner/Coffee Banner.svg";
import coffee1 from "../../assets/banner/Ellipse 1549.svg";
import coffee2 from "../../assets/banner/Ellipse 1550.svg";
import coffee3 from "../../assets/banner/Ellipse 1551.svg";
import Container from "../Shared/Container";
const Banner = () => {
  return (
    // pt-[650px]
    // xl:lg:md:w-[1366px] mx-auto

    <>
      <Container>
        <div className="banner    h-full   ">
          <div className="xl:lg:md:pl-[40px] xl:lg:md:flex">
            <div className="xl:lg:md:w-1/2  xl:lg:md:pt-[160px] ">
              <h3 className="font-Value_Sans_Pro_Two text-xl text-wood-bark">
                Welcome to our
              </h3>
              <h1 className="text-4xl sm:text-4xl lg:text-[110px] xl:text-[110px] font-normal text-[#270A05] font-custom my-[40px]">
                Unlocklive
              </h1>
              {/* <h1 className="text-4xl sm:text-4xl  xl:lg:md:text-[110px] font-normal text-[#270A05] font-custom">
                Unlocklive
              </h1> */}
              {/* Weight 400 Size 44px */}
              <h3 className="w-fit font-custom text-2xl sm:text-2xl font-normal xl:text-[44px] lg:text-[44px] text-wood-bark ">
                Elevating Your Coffee Experience
              </h3>
              <p className="font-Value_Sans_Pro_one text-[16px] text-wood-bark py-[20px]">
                Unlocklive embodies our commitment to transforming the simple
                act of sipping coffee into a refined and memorable journey. At
                Epicurean, we take pride in curating an exceptional coffee
                experience that transcends the ordinary.
              </p>
              <div className="xl:lg:md:flex justify-between items-center xl:lg:md:gap-6 mx-auto">
                {/* width: Hug (211px) height: Hug (52px) top: 652px left: 277px
                padding: 18px, 30px, 18px, 30px border-radius: 12px gap: 10px */}
                <div className=" text-center">
                  <button className=" rounded-[12px] bg-coffee-color text-white w-[211px] h-[52px] font-Value_Sans_Pro_one">
                    EXPLORE OUR MENUE
                  </button>
                </div>

                <div className="flex  items-center xl:lg:md:justify-between gap-10 ">
                  <div className="flex  items-center xl:lg:md:justify-between  my-6 xl:lg:md:my-0 ">
                    <img
                      className="border-[3px] border-[#FFFFFF]"
                      src={coffee1}
                      alt=""
                    />
                    <img
                      className="border-r-[3px] ml-[-20px] xl:lg:md:ml-[-20px] border-[#FFFFFF]"
                      src={coffee2}
                      alt=""
                    />
                    <img
                      className="border-r-[3px] ml-[-20px] border-[#FFFFFF]"
                      src={coffee3}
                      alt=""
                    />
                  </div>
                  <div className="text-[#270A05] font-Value_Sans_Pro_one ">
                    <p className="font-semibold">1200+ </p>
                    <p>Tasty Variant Coffee</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:lg:md:w-1/2 xl:lg:md:p-12 ">
              {/* width: 754px height: 630px top: 143px left: 1033px */}
              <img
                className="w-full xl:lg:md:w-[754px] xl:lg:md:h-[630px] xl:lg:md:top-[143px] xl:lg:md:left-[1033px] mx-auto"
                src={coffee}
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;

import React from "react";
import Container from "../Shared/Container";
import coffee_cup from "../../assets/choose/Vector.svg";
import coffee_layer from "../../assets/choose/Layer 1 5.svg";
import coffee2 from "../../assets/banner/Ellipse 1550.svg";
import coffee3 from "../../assets/banner/Ellipse 1551.svg";
const Choose = () => {
  return (
    <>
      <Container>
        <div className="h-full xl:lg:md:h-[895px] border-[2px] border-green-500  ">
          <div className="relative  mt-24">
            <div className="absolute right-0 ">
              <img src={coffee_cup} alt="" />
            </div>
            <div className="xl:lg:md:pl-[40px] xl:lg:md:flex">
              <div className="xl:lg:md:w-6/12  xl:lg:md:pt-[160px] ">
                <h3 className="font-Value_Sans_Pro_Two text-xl text-[#86371C]">
                  ------ <span className="leading-3"></span> why choose us
                </h3>

                <h3 className="w-fit font-custom text-2xl sm:text-2xl font-normal xl:text-[44px] lg:text-[44px] text-wood-bark py-[20px]">
                  Choosing Unlocklive, A Taste of Perfection
                </h3>
                <p className="font-Value_Sans_Pro_one text-[16px] text-wood-bark pb-[20px]">
                  Unlocklive takes pride in the art of roasting, transforming
                  raw coffee beans into a symphony of aromatic notes and rich
                  flavors.
                </p>
                <div className="xl:lg:md:flex justify-between items-center xl:lg:md:gap-6 mx-auto">
                  <div className="flex  items-center xl:lg:md:justify-between gap-4">
                    <div className="xl:lg:md:flex  items-center xl:lg:md:justify-between  my-6 xl:lg:md:my-0 gap-4 mx-auto">
                      <div className=" my-auto text-center py-4 border border-[#270A05] h-[134px] w-[203px] border-opacity-[10%] rounded-[10px]">
                        <h1 className="font-custom text-[44px] font-semibold text-wood-bark">
                          20+
                        </h1>

                        <p className="text-[20px] font-normal font-Value_Sans_Pro_one text-wood-bark">
                          Years Experience
                        </p>
                      </div>

                      <div className="my-auto py-4  px-10 text-center border border-[#270A05] h-[134px] w-[202px] border-opacity-[10%] rounded-[10px]">
                        <div>
                          <h1 className="font-custom text-[44px] font-semibold text-wood-bark">
                            100+
                          </h1>

                          <p className="text-[20px] font-normal font-Value_Sans_Pro_one text-wood-bark">
                            Maters Chefs
                          </p>
                        </div>
                      </div>

                      <div className=" my-auto text-center py-4 border border-[#270A05] h-[134px] w-[202px] border-opacity-[10%] rounded-[10px]">
                        <h1 className="font-custom text-[44px] font-semibold text-wood-bark">
                          30+
                        </h1>

                        <p className="text-[20px] font-normal font-Value_Sans_Pro_one text-wood-bark">
                          Achivements
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-[20px] text-center xl:lg:md:text-left">
                  <button className="border-[1px] border-[#86371C] rounded-[12px]  text-[#86371C] w-[199px] h-[52px] font-Value_Sans_Pro_one">
                    Explore Our Menue
                  </button>
                </div>

                <p className="font-Value_Sans_Pro_one text-[16px] text-wood-bark pb-[20px]">
                  Your choice to savor our coffee is an invitation to experience
                  the epitome of craftsmanship, flavor, and dedication.
                </p>
              </div>
              <div className="xl:lg:md:w-6/12 xl:lg:md:p-12 mt-14 ">
                <img
                  className="w-full xl:lg:md:w-[464px] xl:lg:md:h-[528px] xl:lg:md:top-[143px] xl:lg:md:left-[1033px] mx-auto"
                  src={coffee_layer}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Choose;

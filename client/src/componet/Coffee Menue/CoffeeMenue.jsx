import React from "react";
import Container from "../Shared/Container";
import coffee_bean from "../../assets/menue/Group.svg";
import coffee_layer from "../../assets/choose/Layer 1 5.svg";
import menu1 from "../../assets/menue/menu1.png";
import menu2 from "../../assets/menue/menu2.png";
import menu3 from "../../assets/menue/menu3.png";
import menu4 from "../../assets/menue/menu4.png";
const CoffeeMenue = () => {
  return (
    <>
      <Container>
        <div className="h-full xl:lg:md:h-[800px] mt-8 xl:lg:md:mt-0 ">
          <div className="relative  ">
            <div className="absolute bottom-0 right-0">
              <img src={coffee_bean} alt="" />
            </div>
            <div className="xl:lg:md:pl-[40px] xl:lg:md:flex   mx-auto w-[95%]">
              <div className="  xl:lg:md:pt-[40px]">
                <h2 className="flex flex-row flex-nowrap items-center  ">
                  <span className="flex-grow block border-t border-[#86371C]"></span>
                  <span className="flex-none block mx-4 px-4 py-2.5 text-xl text-[#86371C] leading-none font-medium font-lemonada">
                    Coffee Menu
                  </span>
                  <span className="flex-grow block border-t border-[#86371C] "></span>
                </h2>

                <div className="text-center ">
                  <h3 className=" font-custom text-2xl sm:text-2xl font-normal xl:text-[44px] lg:text-[44px] text-wood-bark py-[20px] ">
                    Unlocklive Coffee Menu
                  </h3>
                </div>

                <div className="grid grid-cols-1 xl:lg:md:grid-cols-2 gap-4">
                  <div className="flex items-center my-auto  border border-[#270A05] h-[144px]  border-opacity-[10%] rounded-[10px] px-3">
                    <div className="ml-[30px]">
                      <img className="" src={menu1} alt="" />
                    </div>
                    <div className="ml-[20px]">
                      <h1 className="font-Abril xl:lg:md:text-[24px]">
                        Double Espresso x2
                      </h1>
                      <p className="font-Value_Sans_Pro_one text-[14px] ">
                        There are many variations of passages
                        ............................
                      </p>
                    </div>
                    <div className="pt-4">
                      <div className="border border-dashed rounded-full w-[60px] h-[60px] ">
                        <div className="w-[56px] h-[56px] text-center bg-[#86371C] rounded-full ml-[1px] mt-[1px] py-4 text-white font-Value_Sans_Pro_one">
                          $10
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center my-auto  border border-[#270A05] h-[144px]  border-opacity-[10%] rounded-[10px] px-3">
                    <div className="ml-[30px]">
                      <img className="" src={menu3} alt="" />
                    </div>
                    <div className="ml-[20px]">
                      <h1 className="font-Abril xl:lg:md:text-[24px]">
                        Hazelnut Heaven Latte
                      </h1>
                      <p className="font-Value_Sans_Pro_one text-[14px] ">
                        There are many variations of passages
                        ............................
                      </p>
                    </div>
                    <div className="pt-4">
                      <div className="border border-dashed rounded-full w-[60px] h-[60px] ">
                        <div className="w-[56px] h-[56px] text-center bg-slate-200 rounded-full ml-[1px] mt-[1px] py-4 text-[#270A05] font-Value_Sans_Pro_one">
                          $10
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center my-auto  border border-[#270A05] h-[144px]  border-opacity-[10%] rounded-[10px] px-3">
                    <div className="ml-[30px]">
                      <img className="" src={menu2} alt="" />
                    </div>
                    <div className="ml-[20px]">
                      <h1 className="font-Abril xl:lg:md:text-[24px]">
                        Salted Caramel Cold Brew
                      </h1>
                      <p className="font-Value_Sans_Pro_one text-[14px] ">
                        There are many variations of passages
                        ............................
                      </p>
                    </div>
                    <div className="pt-4">
                      <div className="border border-dashed rounded-full w-[60px] h-[60px] ">
                        <div className="w-[56px] h-[56px] text-center bg-slate-200 rounded-full ml-[1px] mt-[1px] py-4 text-[#270A05] font-Value_Sans_Pro_one">
                          $10
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center my-auto  border border-[#270A05] h-[144px]  border-opacity-[10%] rounded-[10px] px-3">
                    <div className="ml-[30px]">
                      <img className="" src={menu4} alt="" />
                    </div>
                    <div className="ml-[20px]">
                      <h1 className="font-Abril xl:lg:md:text-[24px]">
                        Coconut Cream Delight (Summer)
                      </h1>
                      <p className="font-Value_Sans_Pro_one text-[14px] ">
                        There are many variations of passages
                        ............................
                      </p>
                    </div>
                    <div className="pt-4">
                      <div className="border border-dashed rounded-full w-[60px] h-[60px] ">
                        <div className="w-[56px] h-[56px] text-center bg-slate-200 rounded-full ml-[1px] mt-[1px] py-4 text-[#270A05] font-Value_Sans_Pro_one">
                          $10
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[20px] text-center ">
                  <button className="border-[1px] border-[#86371C] rounded-[12px]  text-[#86371C] w-[199px] h-[52px] font-Value_Sans_Pro_one">
                    View All Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CoffeeMenue;

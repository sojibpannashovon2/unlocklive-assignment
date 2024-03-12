import React, { useState } from "react";
import Container from "../Shared/Container";
import gallery1 from "../../assets/gallery/gallery1.png";
import gallery2 from "../../assets/gallery/gallery2.png";
import gallery3 from "../../assets/gallery/gallery3.png";
import gallery4 from "../../assets/gallery/gallery4.png";
import gallery5 from "../../assets/gallery/gallery5.png";
const ShowCase = () => {
  const Tab = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
      <div className="w-full">
        <div className="xl:lg:md:flex text-center ">
          {children.map((child, index) => (
            <button
              key={index}
              className={`px-12 w-[70%]  py-2 focus:outline-none ${
                activeTab === index
                  ? "bg-[#f5f3f2] border-2 border-[#86371C] rounded-lg "
                  : "bg-white"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {child.props.label}
            </button>
          ))}
        </div>
        <div className="mt-4">{children[activeTab]}</div>
      </div>
    );
  };

  return (
    <>
      <Container>
        <div className=" h-full xl:lg:md:h-[984px] ">
          <div className="text-center">
            <h3 className="font-lemonada text-xl text-[#86371C] border-b w-36 mx-auto  border-[#86371C] pb-2">
              <span className="divide-y"></span> Showcase
            </h3>

            <h3 className=" text-center font-custom text-2xl sm:text-2xl font-normal xl:text-[44px] lg:text-[44px] text-wood-bark py-[20px]">
              Our Chefs New Creations
            </h3>
            <p className="font-Value_Sans_Pro_one text-[16px] text-wood-bark pb-[20px] xl:lg:md:w-[600px] text-center mx-auto">
              Behold the extraordinary creations born from the synergy of our
              users' ingenuity and the transformative power of AI, a testament
              to boundless innovation.
            </p>
          </div>
          <div className=" mt-8 w-[95%] mx-auto ">
            <Tab>
              <div label="All" className="">
                <div className="xl:lg:md:flex gap-4">
                  <img className="w-[364px]" src={gallery1} alt="" />
                  <img
                    className="w-[812px] xl:lg:md:my-0 mt-2"
                    src={gallery2}
                    alt=""
                  />
                </div>
                <div className="xl:lg:md:flex gap-4 mt-4">
                  <img
                    className=" w-full xl:lg:md:w-[296px]"
                    src={gallery3}
                    alt=""
                  />
                  <img
                    className="w-[486px] xl:lg:md:my-0 mt-2"
                    src={gallery4}
                    alt=""
                  />
                  <img className="w-[378px] my-2" src={gallery5} alt="" />
                </div>
              </div>
              <div label="Burger" className="">
                <div className="text-center border border-slate-300 p-24 rounded-md shadow-sm">
                  <h1 className="font-custom text-4xl">Nothing To Serve Now</h1>
                </div>
              </div>
              <div label="Drinks" className="">
                <div>
                  <img className="w-[812px]" src={gallery2} alt="" />
                </div>
              </div>
              <div label="Pizza" className="">
                <div className="text-center border border-slate-300 p-24 rounded-md shadow-sm">
                  <h1 className="font-custom text-4xl">Nothing To Serve Now</h1>
                </div>
              </div>
              <div label="Dinner" className="p-4">
                <div>
                  <img className="w-[296px]" src={gallery3} alt="" />
                </div>
              </div>
              <div label="Lunch" className="p-4">
                <div className="text-center border border-slate-300 p-24 rounded-md shadow-sm">
                  <h1 className="font-custom text-4xl">Nothing To Serve Now</h1>
                </div>
              </div>
              <div label="Cookies" className="p-4">
                <div>
                  <img className="w-[378px]" src={gallery5} alt="" />
                </div>
              </div>
              <div label="Bakery" className="p-4">
                <div>
                  <img className="w-[486px]" src={gallery4} alt="" />
                </div>
              </div>
            </Tab>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShowCase;

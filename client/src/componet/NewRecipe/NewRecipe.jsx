import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Container from "../Shared/Container";
import show1 from "../../assets/slider/slide1.png";
import show2 from "../../assets/slider/slider2.png";
import show3 from "../../assets/slider/slider3.png";
const NewRecipe = () => {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "slider",
      focusAt: "center",
      perView: 3, // Display three slides at a time
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <Container>
        <div className=" xl:lg:md:flex mb-8">
          <div>
            <div className="xl:lg:md:ml-[110px] w-[80%] mb-10">
              <h3 className="font-lemonada text-xl text-[#86371C]  border-[#86371C]">
                ----<span className="divide-y"></span> New Recepies
              </h3>

              <h3 className="  font-custom text-2xl sm:text-2xl font-normal xl:text-[28px] lg:text-[44px] text-wood-bark py-[20px]">
                Taste Our New Recipe
              </h3>
              <p className="font-Value_Sans_Pro_one text-[12px] text-wood-bark pb-[20px] w-full  mx-auto">
                Malesuada cursus a tincidunt volutpat posuere lacinia. Congue
                malesuada lacus pharetra ut vel amet. Amet turpis suspendisse
                porttitor scelerisque amet dolor et.
              </p>
              <p className="font-Value_Sans_Pro_one text-[12px] text-wood-bark pb-[20px]   mx-auto">
                There are many variations of passages of Lorem Ipsum form any
                injected humour, or randomised words which don't look slightly
                believable.
              </p>
            </div>
          </div>
          {/*<!-- Component: Slider with controls inside --> */}
          <div className="relative xl:lg:md:w-3/5   glide-01">
            {/*    <!-- Slides --> */}
            <div className="overflow-hidden" data-glide-el="track">
              <ul className="whitespace-no-wrap gap-4 flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                <li>
                  <img
                    src={show1}
                    className="w-full xl:lg:md:w-[375px] h-[300px] "
                    alt="Slide 1"
                  />
                </li>
                <li>
                  <img
                    src={show2}
                    className="w-full xl:lg:md:w-[375px] h-[300px] "
                    alt="Slide 2"
                  />
                </li>
                <li>
                  <img
                    src={show3}
                    className="w-full xl:lg:md:w-[375px] h-[300px] "
                    alt="Slide 3"
                  />
                </li>
                {/* Add three more slides here */}

                {/* <li>
                  <img
                    src="https://Tailwindmix.b-cdn.net/image-06.jpg"
                    className="w-full max-w-full max-h-full m-auto"
                    alt="Slide 6"
                  />
                </li> */}
              </ul>
            </div>

            {/*    <!-- Controls --> */}

            <div
              className="absolute left-0 flex gap-52 xl:lg:md:gap-2 pt-16 xl:lg:md:ml-[-590px] w-full h-0 px-4 top-1/2 "
              data-glide-el="controls"
            >
              <button
                className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                data-glide-dir="<"
                aria-label="prev slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <title>prev slide</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
              </button>
              <button
                className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                data-glide-dir=">"
                aria-label="next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <title>next slide</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/*<!-- End Slider with controls inside --> */}
        </div>
      </Container>
    </>
  );
};

export default NewRecipe;

import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [frames, setFrames] = useState([]);
  const [width, setWidth] = useState(750); // Initial width
  const limit = { start: 0, end: frames.length - 1 };

  useEffect(() => {
    const rootEl = document.querySelector(".gallery");
    const platform = rootEl.querySelector(".platform");
    const contentArea = rootEl.querySelector(".content-area");
    const frameElements = Array.from(platform.querySelectorAll(".each-frame"));

    setFrames(frameElements);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const val = event.keyCode;
      if (val === 39 && index !== limit.end) next();
      if (val === 37 && index !== limit.start) prev();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [index]);

  const next = () => {
    platform.style.right = width * (index + 1) + "px";
    setIndex(index + 1);
    setTitle();
  };

  const prev = () => {
    platform.style.right = width * (index - 1) + "px";
    setIndex(index - 1);
    setTitle();
  };

  const goto = (targetIndex) => {
    platform.style.right = width * targetIndex + "px";
    setIndex(targetIndex);
    setTitle();
  };

  const setTitle = () => {
    const heading = document.querySelector(".gallery .heading");
    heading.innerText = frames[index].getAttribute("title");
  };

  return (
    <>
      <div className="text-xl font-bold m-5 text-center">
        Use Keyboard Arrow Keys To Go Left And Right
      </div>
      <div
        className="gallery border-2 rounded mx-auto m-5 bg-white"
        style={{ width: `${width}px` }}
      >
        <div className="top flex p-2 border-b select-none">
          <div className="heading text-gray-800 w-full pl-3 font-semibold my-auto"></div>
          <div className="buttons ml-auto flex text-gray-600 mr-1">
            <svg
              onClick={prev}
              className="w-7 border-2 rounded-l-lg p-1 cursor-pointer border-r-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <svg
              onClick={next}
              className="w-7 border-2 rounded-r-lg p-1 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
        <div className="content-area w-full h-96 overflow-hidden">
          <div className="platform shadow-xl h-full flex">
            {frames.map((frame, i) => (
              <div
                key={i}
                className="each-frame border-box flex-none h-full"
                title={frame.getAttribute("title")}
              >
                <div className="main flex w-full p-8">
                  <div className="sub w-4/6 my-auto">
                    <img
                      className="w-full p-8"
                      src={frame
                        .querySelector("../../assets/gallery/gallery1.png")
                        .getAttribute("src")}
                      alt=""
                    />
                  </div>
                  <div className="sub w-full my-auto">
                    <div className="head text-3xl font-bold mb-4">
                      {frame.getAttribute("title")}
                    </div>
                    <div className="long-text text-lg">
                      {frame.querySelector(".long-text").innerText}
                    </div>
                    <div
                      className="goto border border-gray-400 text-sm font-semibold inline-block mt-2 p-1 px-2 rounded cursor-pointer"
                      onClick={() => goto(i)}
                    >
                      Goto Frame {i + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

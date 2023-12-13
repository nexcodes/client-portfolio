import { useState } from "react";
import { Parallax } from "react-scroll-parallax";

const JourneyCard = () => {
  const [scroll, setScroll] = useState(0);

  const top =
    scroll * 100 > 20 ? (scroll * 100 < 80) ? (scroll * 100) : "80" : "20";

  return (
    <Parallax
      speed={10}
      translateY={[0, 0]}
      onChange={(element) => setScroll(element.progress)}
    >
      <div className="z-[-3]">
        <div className="px-4 sm:px-12">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="flex-col justify-center lg:items-center flex relative">
              <div className="z-[-2] w-[3px] h-full bg-gray-400 absolute">
                <div
                  className="z-[1] w-4 h-4 bg-white absolute bottom-auto -translate-x-[40%] rounded-full"
                  style={{ top: `${top}%` }}
                ></div>
              </div>
              <div className="pl-8 lg:pl-0 w-full gap-y-6 z-[2] md:grid-rows-[auto] md:grid-cols-[1fr_10rem_1fr] lg:grid-cols-[1fr_12rem_1fr] auto-cols-[1fr] grid relative py-16">
                <div>
                  <h3
                    className="font-grand-wilson-sans text-xl sm:text-2xl text-white"
                    style={{ opacity: scroll * 1.9 }}
                  >
                    Hand - Sculpting Beginnings
                  </h3>
                </div>
                <div className="justify-center items-stretch flex">
                  <div className="w-[0.9375rem] h-[0.9375rem] bg-[rgba(0,0,0,0)] sticky shadow-[0_0_0_8px_rgba(0,0,0,0)] rounded-[100%] top-[50vh]"></div>
                </div>
                <div style={{ opacity: scroll * 1.6 }}>
                  <div>
                    <p className="font-proxima text-gray-100 text-base sm:text-lg">
                      We started our journey with hand-sculpting and creating
                      moulds, setting new industry standards.
                    </p>
                  </div>
                  <div className="overflow-hidden">
                    <img
                      src="https://assets-global.website-files.com/65605df88e34fa6e673e5f1f/6564438d246525181e94b35b_optimized_for_web_jpeg-04062020_moldmaking_hero_225.webp"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default JourneyCard;

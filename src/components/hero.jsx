import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [scroll, setScroll] = useState(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest);
  });

  return (
    <section className="z-0 relative">
      <div className="px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col justify-start">
            <div className="h-screen md:h-[140vh] lg:h-[180vh] flex justify-center sticky top-0 overflow-hidden">
              <motion.div
                style={{ translateY: scroll + 150 }}
                className="z-10 text-center relative text-[#e8e8e8]"
              >
                <div className="z-0 flex flex-col relative overflow-hidden h-8 md:h-20">
                  <motion.h2
                    style={{
                      translateY: -(scroll * 0.5),
                      opacity: 1 - (scroll * 8) / 1000,
                    }}
                    className="z-0 text-dark-blue relative font-grand-wilson-sans text-3xl sm:text-5xl lg:text-8xl"
                  >
                    Sculpting
                  </motion.h2>
                  <motion.h2
                    style={{
                      translateY: -(scroll * 0.5),
                      opacity: 2 - (scroll * 8) / 1000,
                    }}
                    className="z-0 text-dark-blue relative font-grand-wilson-sans text-3xl sm:text-5xl lg:text-8xl"
                  >
                    innovation.
                  </motion.h2>
                  <motion.h2
                    style={{
                      translateY: -(scroll * 0.5),
                      opacity: 3 - (scroll * 6) / 1000,
                    }}
                    className="z-0 text-dark-blue relative font-grand-wilson-sans text-3xl sm:text-5xl lg:text-8xl"
                  >
                    redefinning
                  </motion.h2>
                  <motion.h2
                    style={{
                      translateY: -(scroll * 0.5),
                      opacity: 4 - (scroll * 4) / 1000,
                    }}
                    className="z-0 text-dark-blue relative font-grand-wilson-sans text-3xl sm:text-5xl lg:text-8xl"
                  >
                    possibilities.
                  </motion.h2>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

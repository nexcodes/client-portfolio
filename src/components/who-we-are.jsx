import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const WhoWeAre = () => {
  const [scroll, setScroll] = useState(0);
  const [weight, setWeight] = useState(1);

  useEffect(() => {
    if (window.innerWidth > 786) {
      setWeight(2)
    }
  }, [setWeight]);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest);
  });
  console.log(9 - (scroll / 1000) * -50);
  return (
    <section className="bg-[#0c2340]">
      <motion.div
        className="max-w-3xl mx-auto px-4 py-16 text-center"
        style={{ opacity: 9 - (scroll * 7.3) / 1000 }}
      >
        <div>
          <h3 className="z-0 text-[#e8e8e8] relative font-grand-wilson-sans text-6xl">
            WHO WE ARE
          </h3>
        </div>
        <div className="mt-16">
          <h2 className="text-[#e8e8e8] relative font-proxima-nova text-xl leading-5">
            <strong>InSculp 3D</strong> stands at the intersection of art and
            technology. With over{" "}
            <strong>20 years of industry expertise</strong>, we have transformed
            the realm of production into a canvas of creative possibilities. Our
            journey is marked by an intricate blend of traditional craftsmanship
            and advanced manufacturing techniques, ranging from handcrafting and
            precision wire cutting to CNC milling, robotic arm sculpting, and
            pioneering 3D printing technologies. At our core, we are a team of
            skilled artisans and technicians, committed to turning your visions
            into tangible masterpieces.
          </h2>
        </div>
      </motion.div>

      <motion.div
        className="z-10 sticky top-0 flex flex-col h-screen"
        style={{
          translateY: -scroll + (950 * weight),
        }}
      >
        <motion.div className="w-full h-full flex items-center justify-center relative overflow-hidden">
          <motion.div
            className="w-full max-w-[30vw] absolute"
            style={{
              transform: `translate(${9 - (scroll / 1000) * -50}%, 0%)`,
            }}
          >
            <img
              src="https://assets-global.website-files.com/65605df88e34fa6e673e5f1f/6560ede6a3727966ad12b089_P%2017.png"
              loading="lazy"
              alt=""
              className="w-full h-full"
            />
          </motion.div>
          <motion.div
            className="w-full max-w-[30vw] absolute"
            style={{ transform: `translate(${9 - (scroll / 1000) * 73}%, 0%)` }}
          >
            <img
              src="https://assets-global.website-files.com/65605df88e34fa6e673e5f1f/6560ede6fdaedc633900bb91_P%20110.png"
              loading="lazy"
              alt=""
              className="w-full h-full"
            />
          </motion.div>
          <motion.div
            className="w-full max-w-[30vw] absolute"
            style={{ transform: `translate(${9 - (scroll / 1000) * 45}%, 0%)` }}
          >
            <img
              src="https://assets-global.website-files.com/65605df88e34fa6e673e5f1f/6560ede6acb371764ea4562b_P%2018.png"
              loading="lazy"
              alt=""
              className="w-full h-full"
            />
          </motion.div>
          <motion.div
            className="w-full max-w-[30vw] absolute"
            style={{
              transform: `translate(${9 - (scroll / 1000) * -70}%, 0%)`,
            }}
          >
            <img
              src="https://assets-global.website-files.com/65605df88e34fa6e673e5f1f/6560ede5acb371764ea4560a_P%2015.png"
              loading="lazy"
              alt=""
              className="w-full h-full"
            />
          </motion.div>
          <motion.div
            className="w-full max-w-[30vw] absolute"
            style={{ transform: "translate(0% , 0)" }}
          >
            <img
              src="https://assets-global.website-files.com/65605df88e34fa6e673e5f1f/6560ede63afae725c2a6991c_P%2019.png"
              loading="lazy"
              alt=""
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhoWeAre;

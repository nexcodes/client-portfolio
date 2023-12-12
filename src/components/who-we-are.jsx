import { useState } from "react";
import { Parallax } from "react-scroll-parallax";

const WhoWeAre = () => {
  const [scroll, setScroll] = useState(0);

  console.log(scroll);

  return (
    <section className="bg-[#0c2340] overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <Parallax
          speed={-5}
          translateY={[0, 0]}
          opacity={[1, 0]}
          scale={[1, 0.8]}
          onChange={(element) => setScroll(element.progress * 100)}
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
              <strong>20 years of industry expertise</strong>, we have
              transformed the realm of production into a canvas of creative
              possibilities. Our journey is marked by an intricate blend of
              traditional craftsmanship and advanced manufacturing techniques,
              ranging from handcrafting and precision wire cutting to CNC
              milling, robotic arm sculpting, and pioneering 3D printing
              technologies. At our core, we are a team of skilled artisans and
              technicians, committed to turning your visions into tangible
              masterpieces.
            </h2>
          </div>
        </Parallax>
      </div>

      <div className="z-10 sticky top-0 flex flex-col h-screen">
        <div className="w-full h-full flex items-center justify-center relative">
          <div
            className="w-full max-w-[30vw] absolute rotate-12"
            style={{ translate: `${-scroll * 0.4}% ${-scroll * 0.8}%` }}
          >
            <img
              src="https://assets-global.website-files.com/65605df88e34fa6e673e5f1f/6560ede6a3727966ad12b089_P%2017.png"
              loading="lazy"
              alt=""
              className="w-full h-full"
            />
          </div>

          <div
            className="w-full max-w-[30vw] absolute -rotate-6"
            style={{ translate: `${scroll * 0.3}% ${-scroll * 0.8}%` }}
          >
            <img
              src="https://assets-global.website-files.com/65605df88e34fa6e673e5f1f/6560ede6fdaedc633900bb91_P%20110.png"
              loading="lazy"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-full max-w-[30vw] absolute">
            <img
              src="https://assets-global.website-files.com/65605df88e34fa6e673e5f1f/6560ede6acb371764ea4562b_P%2018.png"
              loading="lazy"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div
            className="w-full max-w-[30vw] absolute rotate-12"
            style={{ translate: `${-scroll * 0.5}% ${scroll * 0.4}%` }}
          >
            <img
              src="https://assets-global.website-files.com/65605df88e34fa6e673e5f1f/6560ede5acb371764ea4560a_P%2015.png"
              loading="lazy"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-full max-w-[30vw] absolute" style={{ translate: `${scroll * 0.8}% ${scroll * 0.6}%` }}>
            <img
              src="https://assets-global.website-files.com/65605df88e34fa6e673e5f1f/6560ede63afae725c2a6991c_P%2019.png"
              loading="lazy"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

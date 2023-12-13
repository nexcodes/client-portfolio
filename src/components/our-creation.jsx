const OurCreation = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animation">
      <div className="text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center pb-4 sm:pb-8">
          <h2 className="font-grand-wilson-sans font-semibold text-2xl md:text-4xl">
            Your Vision, Our Creation
          </h2>
          <p className="text-lg font-proxima text-dark-blue">
            With <strong>InSculp 3D</strong>, the possibilities are limitless.
            Whether it&#x27;s a revolutionary art sculpture, an architectural
            marvel, or a visionary installation, we have the expertise and
            technology to bring it to life. We are more than just a 3D printing
            company; we are artists, creators, and innovators dedicated to
            transforming your creative vision into awe-inspiring realities.
          </p>
        </div>
      </div>
      <div className="grid gap-8 grid-rows-[auto] grid-cols-[1fr]">
        <div className="gap-8 justify-between items-stretch flex flex-col lg:flex-row">
          <a
            href="#"
            className="relative overflow-hidden w-full hover:w-[130%] group"
          >
            <div className="w-full h-full flex-col justify-center items-center flex absolute inset-0">
              <img
                src="https://assets-global.website-files.com/65605df88e34fa6e673e5f1f/6560ede6acb371764ea4562b_P%2018.png"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover group-hover:scale-105"
              />
            </div>
            <div className="h-full min-h-[70vh] flex-col justify-end flex relative p-8">
              <h3 className="font-grand-wilson-sans text-3xl font-bold text-[#e8e8e8] opacity-0 group-hover:opacity-100">
                Crimson Canyon
                <br />
              </h3>
            </div>
          </a>
          <a
            href="#"
            className="relative overflow-hidden w-full hover:w-[130%] group"
          >
            <div className="w-full h-full flex-col justify-center items-center flex absolute inset-0">
              <img
                src="https://assets-global.website-files.com/65605df88e34fa6e673e5f1f/6560ede6fdaedc633900bb91_P%20110.png"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover group-hover:scale-105"
              />
            </div>
            <div className="h-full min-h-[70vh] flex-col justify-end flex relative p-8">
              <h3 className="font-grand-wilson-sans text-3xl font-bold text-[#e8e8e8] opacity-0 group-hover:opacity-100">
                Crimson Canyon
                <br />
              </h3>
            </div>
          </a>
          <a
            href="#"
            className="relative overflow-hidden w-full hover:w-[130%] group"
          >
            <div className="w-full h-full flex-col justify-center items-center flex absolute inset-0">
              <img
                src="https://assets-global.website-files.com/65605df88e34fa6e673e5f1f/6560ede63afae725c2a6991c_P%2019.png"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover group-hover:scale-105"
              />
            </div>
            <div className="h-full min-h-[70vh] flex-col justify-end flex relative p-8">
              <h3 className="font-grand-wilson-sans text-3xl font-bold text-[#e8e8e8] opacity-0 group-hover:opacity-100">
                Crimson Canyon
                <br />
              </h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurCreation;

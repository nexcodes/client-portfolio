import Box from "../../components/icons/box";
import LinkedIn from "../../components/icons/linked-in";

const About = () => {
  return (
    <main className="space-y-4">
      {/* hero */}
      <section className="space-y-6 px-4 sm:px-6 pb-8 pt-6 md:pb-12 md:pt-10">
        <div className="container mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-4xl lg:text-5xl">
            Where innovation meets precision in the the world of 3D
          </h1>
          <p className="leading-normal text-base sm:text-lg sm:leading-6 px-8 font-medium">
            our 3D printing service offer high quality, large scale models for
            wall decor, store fronts, building, bill boards, furniture and
            sculptures. Bring your ideas to life with precision and detail.
          </p>
        </div>
      </section>
      {/* the story */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-start">
          <div className="lg:w-1/3 space-y-2 lg:space-y-4 lg:mb-12">
            <h5 className="font-bold text-sm sm:text-lg">About us</h5>
            <h2 className="font-bold text-2xl md:text-4xl">The story</h2>
          </div>
          <p className="lg:w-1/2 leading-normal text-sm sm:text-lg sm:leading-6 px-8 font-medium">
            Our mission is to provide the best quality 3D printing service for
            our customers. We strive to provide the best quality and service
            possible. We want to help you bring your ideas to life.
          </p>
        </div>
        <div className="w-full h-full">
          <img src="https://placehold.co/600x400" alt="" className="w-full" />
        </div>
      </section>
      {/* Achievements */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-12 space-y-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-start">
          <div className="lg:w-1/2">
            <div className="space-y-4 py-12">
              <h2 className="font-bold text-3xl sm:text-5xl md:text-4xl lg:text-5xl">
                Achievements
              </h2>
              <p className="leading-normal text-sm sm:text-lg sm:leading-6 font-medium">
                Our mission is to provide the best quality 3D printing service
                for our customers. We strive to provide the best quality and
                service possible. We want to help you bring your ideas to life.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center lg:place-items-start gap-6">
                <div className="space-y-2">
                  <h6 className="font-bold text-2xl sm:text-5xl">500+</h6>
                  <p className="leading-normal text-sm sm:text-lg sm:leading-6 font-semibold">
                    Project completed
                  </p>
                </div>
                <div className="space-y-2">
                  <h6 className="font-bold text-2xl sm:text-5xl">500+</h6>
                  <p className="leading-normal text-sm sm:text-lg sm:leading-6 font-semibold">
                    Project completed
                  </p>
                </div>
                <div className="space-y-2">
                  <h6 className="font-bold text-2xl sm:text-5xl">500+</h6>
                  <p className="leading-normal text-sm sm:text-lg sm:leading-6 font-semibold">
                    Project completed
                  </p>
                </div>
                <div className="space-y-2">
                  <h6 className="font-bold text-2xl sm:text-5xl">500+</h6>
                  <p className="leading-normal text-sm sm:text-lg sm:leading-6 font-semibold">
                    Project completed
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 h-full">
            <img src="https://placehold.co/600x400" alt="" className="w-full" />
          </div>
        </div>
      </section>
      {/* Trusted by */}
      <section className="py-12">
        <h6 className="font-bold text-lg sm:text-xl text-center">
          Trusted by the world best companies
        </h6>
        <div className="flex flex-wrap items-center justify-center gap-4 my-8">
          <div className="flex items-center space-x-2">
            <Box className="w-10 h-10" />
            <span className="font-bold text-xl sm:text-2xl text-center">
              Relume
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Box className="w-10 h-10" />
            <span className="font-bold text-xl sm:text-2xl text-center">
              Relume
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Box className="w-10 h-10" />
            <span className="font-bold text-xl sm:text-2xl text-center">
              Relume
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Box className="w-10 h-10" />
            <span className="font-bold text-xl sm:text-2xl text-center">
              Relume
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Box className="w-10 h-10" />
            <span className="font-bold text-xl sm:text-2xl text-center">
              Relume
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Box className="w-10 h-10" />
            <span className="font-bold text-xl sm:text-2xl text-center">
              Relume
            </span>
          </div>
        </div>
      </section>
      {/* Our Values */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-12 space-y-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 text-center">
            <div className="">
              <h5 className="font-bold text-sm sm:text-lg">Our Values</h5>
              <h2 className="font-bold text-3xl sm:text-5xl md:text-4xl lg:text-5xl">
                What Set Us Apart
              </h2>
            </div>
            <p className="leading-normal text-muted-foreground text-base sm:text-lg sm:leading-6 px-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, architecto velit. Sed atque saepe hic! Esse
              accusamus nobis sint, unde alias hic labore!
            </p>
          </div>
        </div>

        <div className="py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-10">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <Box className="w-10 h-10" />
              <h6 className="font-bold text-xl sm:text-3xl">Expertise</h6>
              <p className="leading-normal text-xs sm:text-sm sm:leading-6 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, architecto velit. Sed atque saepe hic! Esse
                accusamus nobis sint, unde alias hic labore!
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <Box className="w-10 h-10" />
              <h6 className="font-bold text-xl sm:text-3xl">
                State of art technology
              </h6>
              <p className="leading-normal text-xs sm:text-sm sm:leading-6 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, architecto velit. Sed atque saepe hic! Esse
                accusamus nobis sint, unde alias hic labore!
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <Box className="w-10 h-10" />
              <h6 className="font-bold text-xl sm:text-3xl">Quality</h6>
              <p className="leading-normal text-xs sm:text-sm sm:leading-6 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, architecto velit. Sed atque saepe hic! Esse
                accusamus nobis sint, unde alias hic labore!
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <Box className="w-10 h-10" />
              <h6 className="font-bold text-xl sm:text-3xl">Expertise</h6>
              <p className="leading-normal text-xs sm:text-sm sm:leading-6 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, architecto velit. Sed atque saepe hic! Esse
                accusamus nobis sint, unde alias hic labore!
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <Box className="w-10 h-10" />
              <h6 className="font-bold text-xl sm:text-3xl">
                State of art technology
              </h6>
              <p className="leading-normal text-xs sm:text-sm sm:leading-6 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, architecto velit. Sed atque saepe hic! Esse
                accusamus nobis sint, unde alias hic labore!
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <Box className="w-10 h-10" />
              <h6 className="font-bold text-xl sm:text-3xl">Quality</h6>
              <p className="leading-normal text-xs sm:text-sm sm:leading-6 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, architecto velit. Sed atque saepe hic! Esse
                accusamus nobis sint, unde alias hic labore!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our team */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 text-center">
            <div className="">
              <h5 className="font-bold text-md sm:text-lg md:text-xl">
                Our team
              </h5>
              <h2 className="font-bold text-3xl sm:text-5xl md:text-4xl lg:text-5xl">
                Introduce your team
              </h2>
            </div>
            <p className="leading-normal text-sm sm:text-base sm:leading-6 px-8 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, architecto velit. Sed atque saepe hic! Esse
              accusamus nobis sint, unde alias hic labore!
            </p>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-10 mt-8">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <img
                src="https://placehold.co/600x400"
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h6 className="font-bold text-xl sm:text-3xl">Full Name</h6>
                <span className="leading-normal text-md sm:text-lg sm:leading-6">
                  Job title
                </span>
              </div>
              <p className="leading-normal text-xs sm:text-sm sm:leading-6 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, architecto velit. Sed atque saepe hic! Esse
                accusamus nobis sint, unde alias hic labore!
              </p>
              <div className="flex items-center space-x-2">
                <LinkedIn />
                <LinkedIn />
                <LinkedIn />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <img
                src="https://placehold.co/600x400"
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h6 className="font-bold text-xl sm:text-3xl">Full Name</h6>
                <span className="leading-normal text-md sm:text-lg sm:leading-6">
                  Job title
                </span>
              </div>
              <p className="leading-normal text-xs sm:text-sm sm:leading-6 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, architecto velit. Sed atque saepe hic! Esse
                accusamus nobis sint, unde alias hic labore!
              </p>
              <div className="flex items-center space-x-2">
                <LinkedIn />
                <LinkedIn />
                <LinkedIn />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <img
                src="https://placehold.co/600x400"
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h6 className="font-bold text-xl sm:text-3xl">Full Name</h6>
                <span className="leading-normal text-md sm:text-lg sm:leading-6">
                  Job title
                </span>
              </div>
              <p className="leading-normal text-xs sm:text-sm sm:leading-6 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, architecto velit. Sed atque saepe hic! Esse
                accusamus nobis sint, unde alias hic labore!
              </p>
              <div className="flex items-center space-x-2">
                <LinkedIn />
                <LinkedIn />
                <LinkedIn />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <img
                src="https://placehold.co/600x400"
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h6 className="font-bold text-xl sm:text-3xl">Full Name</h6>
                <span className="leading-normal text-md sm:text-lg sm:leading-6">
                  Job title
                </span>
              </div>
              <p className="leading-normal text-xs sm:text-sm sm:leading-6 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, architecto velit. Sed atque saepe hic! Esse
                accusamus nobis sint, unde alias hic labore!
              </p>
              <div className="flex items-center space-x-2">
                <LinkedIn />
                <LinkedIn />
                <LinkedIn />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <img
                src="https://placehold.co/600x400"
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h6 className="font-bold text-xl sm:text-3xl">Full Name</h6>
                <span className="leading-normal text-md sm:text-lg sm:leading-6">
                  Job title
                </span>
              </div>
              <p className="leading-normal text-xs sm:text-sm sm:leading-6 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, architecto velit. Sed atque saepe hic! Esse
                accusamus nobis sint, unde alias hic labore!
              </p>
              <div className="flex items-center space-x-2">
                <LinkedIn />
                <LinkedIn />
                <LinkedIn />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <img
                src="https://placehold.co/600x400"
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h6 className="font-bold text-xl sm:text-3xl">Full Name</h6>
                <span className="leading-normal text-md sm:text-lg sm:leading-6">
                  Job title
                </span>
              </div>
              <p className="leading-normal text-xs sm:text-sm sm:leading-6 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, architecto velit. Sed atque saepe hic! Esse
                accusamus nobis sint, unde alias hic labore!
              </p>
              <div className="flex items-center space-x-2">
                <LinkedIn />
                <LinkedIn />
                <LinkedIn />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* we are hiring */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 text-center">
            <div>
              <h2 className="font-bold text-3xl sm:text-5xl md:text-4xl lg:text-5xl">
                {"We're hiring"}
              </h2>
            </div>
            <p className="leading-normal text-sm sm:text-base sm:leading-6 px-8 font-medium">
              Our team is growing fast & we are always looking for smart people
            </p>
            <button className="border border-gray-900 py-2 px-4 text-sm sm:text-base font-medium">
              View Open roles
            </button>
          </div>
        </div>
      </section>
      {/* blog */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4">
        <div className="">
          <div className="flex flex-col space-y-4">
            <h5 className="font-bold text-sm sm:text-base">Inspiration</h5>
            <h2 className="font-bold text-3xl sm:text-5xl md:text-4xl lg:text-5xl">
              Discover New Design Trends
            </h2>
            <p className="leading-normal text-sm sm:text-base sm:leading-6 font-medium">
              Our team is growing fast & we are always looking for smart people
            </p>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-10 mt-8">
            <article className="flex flex-col space-y-2">
              <img
                src="https://placehold.co/600x400"
                alt=""
                className="w-full h-64 object-cover"
              />
              <span className="font-bold text-xs sm:text-sm">Design</span>
              <h3 className="font-bold text-xl sm:text-2xl">
                10 tips for creating stunning wall decor
              </h3>
              <p className="leading-normal text-xs sm:text-sm sm:leading-6 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, architecto velit. Sed atque saepe hic!
              </p>
              <div className="flex items-center">
                <img
                  src="https://placehold.co/600x400"
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h6 className="font-bold text-xs sm:text-sm">Full Name</h6>
                  <span className="leading-normal text-xs sm:text-sm sm:leading-6">
                    11 jan 2022 • 5 min read
                  </span>
                </div>
              </div>
            </article>
            <article className="flex flex-col space-y-2">
              <img
                src="https://placehold.co/600x400"
                alt=""
                className="w-full h-64 object-cover"
              />
              <span className="font-bold text-xs sm:text-sm">Design</span>
              <h3 className="font-bold text-xl sm:text-2xl">
                10 tips for creating stunning wall decor
              </h3>
              <p className="leading-normal text-xs sm:text-sm sm:leading-6 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, architecto velit. Sed atque saepe hic!
              </p>
              <div className="flex items-center">
                <img
                  src="https://placehold.co/600x400"
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h6 className="font-bold text-xs sm:text-sm">Full Name</h6>
                  <span className="leading-normal text-xs sm:text-sm sm:leading-6">
                    11 jan 2022 • 5 min read
                  </span>
                </div>
              </div>
            </article>
            <article className="flex flex-col space-y-2">
              <img
                src="https://placehold.co/600x400"
                alt=""
                className="w-full h-64 object-cover"
              />
              <span className="font-bold text-xs sm:text-sm">Design</span>
              <h3 className="font-bold text-xl sm:text-2xl">
                10 tips for creating stunning wall decor
              </h3>
              <p className="leading-normal text-xs sm:text-sm sm:leading-6 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, architecto velit. Sed atque saepe hic!
              </p>
              <div className="flex items-center">
                <img
                  src="https://placehold.co/600x400"
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h6 className="font-bold text-xs sm:text-sm">Full Name</h6>
                  <span className="leading-normal text-xs sm:text-sm sm:leading-6">
                    11 jan 2022 • 5 min read
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      
    </main>
  );
};

export default About;

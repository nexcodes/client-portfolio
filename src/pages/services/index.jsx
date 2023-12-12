import ChevronDown from "../../components/icons/chevron-down";

const Services = () => {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 text-center">
            <div className="">
              <h5 className="font-bold text-md sm:text-lg md:text-xl">
                services
              </h5>
              <h2 className="font-bold text-3xl sm:text-5xl md:text-5xl">
                The services we offer are nowhere{" "}
                <br className="hidden lg:block" /> else to found.
              </h2>
            </div>
            <p className="leading-normal text-sm sm:text-base sm:leading-6 px-8 font-medium">
              we offer a verity of services.
            </p>
          </div>
        </div>

        <div className="border border-gray-900 lg:w-3/4 even:mr-auto odd:ml-auto">
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="w-full h-full"
          />
          <div className="p-8">
            <h2 className="font-bold text-xl sm:text-2xl">
              Architectural Marvels
            </h2>
            <p className="leading-normal text-xs sm:text-sm sm:leading-6 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ut facilis quas magnam non excepturi, aliquam ea
              ratione veniam natus dolor assumenda molestias nulla velit impedit
              culpa, nisi quia earum!
            </p>
            <div className="mt-4">
              <span className="bg-gray-100 rounded px-2 py-1 font-bold text-sm">
                Tag one
              </span>
            </div>
            <button className="text-gray-900 text-sm font-medium mt-4 inline-flex items-center hover:underline">
              View Project <ChevronDown className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
        <div className="border border-gray-900 lg:w-3/4 even:mr-auto odd:ml-auto">
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="w-full h-full"
          />
          <div className="p-8">
            <h2 className="font-bold text-xl sm:text-2xl">
              Architectural Marvels
            </h2>
            <p className="leading-normal text-xs sm:text-sm sm:leading-6 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ut facilis quas magnam non excepturi, aliquam ea
              ratione veniam natus dolor assumenda molestias nulla velit impedit
              culpa, nisi quia earum!
            </p>
            <div className="mt-4">
              <span className="bg-gray-100 rounded px-2 py-1 font-bold text-sm">
                Tag one
              </span>
            </div>
            <button className="text-gray-900 text-sm font-medium mt-4 inline-flex items-center hover:underline">
              View Project <ChevronDown className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
        <div className="border border-gray-900 lg:w-3/4 even:mr-auto odd:ml-auto">
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="w-full h-full"
          />
          <div className="p-8">
            <h2 className="font-bold text-xl sm:text-2xl">
              Architectural Marvels
            </h2>
            <p className="leading-normal text-xs sm:text-sm sm:leading-6 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ut facilis quas magnam non excepturi, aliquam ea
              ratione veniam natus dolor assumenda molestias nulla velit impedit
              culpa, nisi quia earum!
            </p>
            <div className="mt-4">
              <span className="bg-gray-100 rounded px-2 py-1 font-bold text-sm">
                Tag one
              </span>
            </div>
            <button className="text-gray-900 text-sm font-medium mt-4 inline-flex items-center hover:underline">
              View Project <ChevronDown className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
        <div className="border border-gray-900 lg:w-3/4 even:mr-auto odd:ml-auto">
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="w-full h-full"
          />
          <div className="p-8">
            <h2 className="font-bold text-xl sm:text-2xl">
              Architectural Marvels
            </h2>
            <p className="leading-normal text-xs sm:text-sm sm:leading-6 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ut facilis quas magnam non excepturi, aliquam ea
              ratione veniam natus dolor assumenda molestias nulla velit impedit
              culpa, nisi quia earum!
            </p>
            <div className="mt-4">
              <span className="bg-gray-100 rounded px-2 py-1 font-bold text-sm">
                Tag one
              </span>
            </div>
            <button className="text-gray-900 text-sm font-medium mt-4 inline-flex items-center hover:underline">
              View Project <ChevronDown className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="border border-gray-900 py-2 px-4 text-sm sm:text-base font-medium">
            View more
          </button>
        </div>
      </section>
    </main>
  );
};

export default Services;

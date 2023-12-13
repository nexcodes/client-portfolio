import clsx from "clsx";

/* eslint-disable react/prop-types */
const ServiceCard = ({ hidden, activeCard }) => {
  return (
    <div className={clsx(
      "relative w-full h-auto flex-col justify-start flex border-r-[rgba(0,0,0,0)] border-r border-solid lg:w-20 lg:h-[90vh] lg:flex-row",
      !hidden ? "lg:w-[42rem]" : "lg:w-20"
    )}>
      <div
        className={clsx(
          "w-full h-20 min-w-full flex-row justify-center border-t-black border-t lg:border-t-0 border-solid lg:h-[70vh] lg:min-w-[5rem] cursor-pointer lg:flex-col lg:justify-between items-center flex relative py-8 bg-white",
        )}
        onClick={activeCard}
      >
        <div className="text-xl absolute left-6 md:left-10 lg:static whitespace-nowrap lg:text-2xl font-bold leading-[1.4]">
          01
        </div>
        <h3 className="font-bold text-2xl lg:hidden">Feature one</h3>
        <h3 className="font-grand-wilson-sans -rotate-90 text-3xl mb-16 hidden lg:block">
          Feature{" "}
        </h3>
      </div>
      <div
        className={clsx(
          "h-full lg:min-w-[50vw] overflow-auto",
          hidden && "hidden"
        )}
      >
        <div className="w-auto lg:w-[40rem] h-[60vh] flex-col flex-none flex pt-4 pb-8 px-6 md:px-10 py-12 lg:px-12 lg:py-16">
          <div className="flex flex-col">
            <h3 className="font-grand-wilson-sans font-normal text-dark-blue text-xl sm:text-2xl">
              Short heading goes here
            </h3>
          </div>
          <p className="font-proxima text-dark-blue">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <div>
            <div className="lg:mb-16">
              <img
                src="https://assets-global.website-files.com/624380709031623bfe4aee60/6243807090316262904aee69_Placeholder%20Image%20-%20Landscape.svg"
                loading="lazy"
                alt=""
                className="w-full h-80 lg:h-[25rem] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

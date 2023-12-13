import JourneyCard from "./journey-card";

const Journey = () => {
  return (
    <div className="relative z-0">
      <div className="z-[-3] relative">
        <div>
          <div className="bg-transparent">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
              <div className="flex-col justify-center items-center flex">
                <h2 className="font-grand-wilson-sans text-xl md:text-2xl text-dark-blue">
                  Our Evolutionary Journey
                </h2>
              </div>
            </div>
          </div>
          <JourneyCard />
          <JourneyCard />
          <JourneyCard />
        </div>
      </div>
    </div>
  );
};

export default Journey;

const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4">
      <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-start">
        <div className="space-y-2 lg:space-y-4 mb-4">
          <h2 className="font-bold text-2xl md:text-4xl">
            Transform your space with 3D
          </h2>

          <p className="leading-normal text-sm sm:text-lg sm:leading-6 font-medium">
            Experience the power of large scale 3d printing
          </p>
        </div>
        <div className="space-x-4">
          <button className="border border-gray-900 bg-gray-900 text-white py-2 px-4 text-sm sm:text-base font-medium">
            Try
          </button>
          <button className="border border-gray-900 py-2 px-4 text-sm sm:text-base font-medium">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

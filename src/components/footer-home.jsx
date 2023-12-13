const Footer = () => {
  return (
    <header className="relative">
      <div>
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="z-10">
            <div className="flex flex-col justify-center items-center text-center">
              <div>
                <div className="font-bold text-light-gray text-3xl sm:text-5xl md:text-6xl">
                  Join Us on a Journey of Limitless Creativity
                </div>
              </div>
              <p className="text-lg text-light-gray my-4">
                Partner with InSculp 3D and embark on an artistic exploration
                where your ideas take physical form. We eagerly await the
                opportunity to sculpt your dreams into reality.
              </p>
            </div>
            <div className="px-12 text-center">
              <div className="grid grid-cols-5 gap-4">
                <input
                  type="email"
                  id="email"
                  className="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 outline-none"
                  placeholder="name@gmail.com"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                  Sign Up{" "}
                </button>
              </div>

              <p className="mt-2 text-xs text-white">
                {
                  "By clicking Sign Up you're confirming that you agree with our "
                }
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Terms and Conditions.
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="z-[-1] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))] absolute inset-[0%]">
        <div className="z-[1] bg-[rgba(0,0,0,0.5)] absolute inset-[0%]"></div>
        <img
          src="https://assets-global.website-files.com/65605df88e34fa6e673e5f1f/656427f65b72fd519bcfbc75_new.png"
          loading="eager"
          sizes="100vw"
          className="w-full h-full object-cover absolute inset-[0%]"
        />
      </div>
    </header>
  );
};

export default Footer;

import MapPin from "./icons/map-pin";
import Phone from "./icons/phone";

const Contact = () => {
  return (
    <>
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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-white rounded-lg overflow-hidden sm:mr-10 p-10 flex items-start justify-start relative">
            <div className="flex flex-col gap-4 text-center lg:text-start">
              <div className="space-y-2 lg:space-y-4">
                <h5 className="font-bold text-sm sm:text-lg">tagline</h5>
                <h2 className="font-bold text-2xl md:text-4xl">Contact Us</h2>
              </div>
              <p className="leading-normal text-sm sm:text-lg sm:leading-6 font-medium">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="w-6 h-6"/>
                  <p>Lorem, ipsum dolor.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-6 h-6"/>
                  <p>Lorem, ipsum dolor.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label
                  htmlFor="first_name"
                  className="leading-7 text-sm text-gray-900 font-medium"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="last_name"
                  className="leading-7 text-sm text-gray-900 font-medium"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-900 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-white border border-gray-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-900 font-medium"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  className="w-full bg-white border border-gray-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor=""
                className="leading-7 text-sm text-gray-900 font-medium"
              >
                Select an option
              </label>
              <select className="border border-gray-900 text-gray-900 text-sm block w-full p-2.5">
                <option selected>Choose a option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <h3 className="text-sm text-black font-medium">
                  Which describe you the best?
                </h3>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="inline-radio"
                  className="ms-2 text-sm font-medium text-gray-900"
                >
                  Option 1
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="inline-radio"
                  className="ms-2 text-sm font-medium text-gray-900"
                >
                  Option 1
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="inline-radio"
                  className="ms-2 text-sm font-medium text-gray-900"
                >
                  Option 1
                </label>
              </div>
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-900 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message...."
                className="w-full bg-white border border-gray-900 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                value=""
                className="w-4 h-4 border-gray-900"
              />
              <label className="ms-2 text-sm font-medium text-gray-900">
                I agree with the{" "}
                <a href="#" className="underline">
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <button className="border border-gray-900 bg-gray-900 text-white py-2 px-4 text-sm sm:text-base font-medium">
              Contact
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

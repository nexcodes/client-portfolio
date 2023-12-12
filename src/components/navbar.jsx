const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 ">
      <div className="flex items-center justify-between  w-full  gap-4">
        <a href="/">
          <img
            src="https://assets-global.website-files.com/65605df88e34fa6e673e5f1f/656421c0e531be60fd09e7d7_Group.svg"
            loading="lazy"
            alt="logo"
          />
        </a>
        <nav>
          <div className="flex items-center">
            <a
              href="/service"
              className="py-2 px-4 text-lg font-normal font-proxima hover:underline"
            >
              Services
            </a>

            <a
              href="/about"
              className="py-2 px-4 text-lg font-normal font-proxima hover:underline"
            >
              About Us
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

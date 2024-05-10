const Hero = () => {
  return (
    <div className="mt-5 flex gap-2 sm:flex-col md:flex-row">
      <div className="xm:w-full md:w-[59%]">
        <img
          src="https://franklintempletonprod.widen.net/content/jdbdnxg4ab/original/its-529-month-banner-1040x450.jpg&quot"
          alt="school boys"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col sm:w-full md:w-[39%] items-center gap-2">
        <div className="bg-[#3769ff] p-4 h-full">
          <h3 className="text-white text-[20px]">
            Bitcoin Exposure Without the Hassle of Investing in Bitcoin
            Directly. That’s EZBC.
          </h3>
          <p className="text-white text-[16px]">Explore EZBC.</p>
        </div>
        <div className="bg-[#6730e3] p-4 h-full">
          <h3 className="text-white text-[20px]">
            The Power of Private Markets: Best Opportunities for Investors Now
          </h3>
          <p className="text-white text-[16px]">
            Join Franklin Templeton for our private markets outlook on May 15.
            Hear from our experts on attractive opportunities in 2024 and
            beyond. Register today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

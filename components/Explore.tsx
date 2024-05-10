const Explore = () => {
  return (
    <section className="w-[80%] max-w-[1200px] mx-[50px] mt-8">
      <h1 className="mb-3 text-[32px] font-bold">
        Explore Our
        <span className="text-[#3769ff]">Investment Managers</span>
      </h1>
      <p className="mb-3 text-[#212121] text-[16px]">
        Access our specialist investment managers - across public and private
        markets – through a single, powerful partnership. Each has investment
        autonomy and a unique culture, bringing a full range of strategies and
        vehicles. Our commitment is to help you efficiently allocate and craft
        custom solutions through insights, support, and consultation services.
      </p>
      <h4 className="text-[16px] font-semibold text-[#212121]">
        PLANNING AND LEARNING
      </h4>
      <h1 className="mb-3 text-[#3769ff] text-[32px] font-bold">
        Be Prepared for What’s Next
      </h1>
      <p className="mb-3 text-[#212121] text-[16px]">
        Whether it is saving for retirement or simply investing in a fund,
        Franklin Templeton has the investments and programs to help you reach
        your financial goals.{" "}
      </p>
      <h4 className="text-[16px] font-semibold text-[#212121]">
        Find what you need
      </h4>
      <h1 className="mb-3 text-[#3769ff] text-[32px] font-bold">
        Top Resources
      </h1>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="text-[#212121] text-[16px] max-w-[650px] bg-yellow-100 p-6">
          <h3 className="font-bold">Re-Think Social Security</h3>
          <p>
            Deciding when to begin receiving Social Security benefits can feel
            overwhelming, but it doesn’t have to be. Learn more about your
            Social Security choices.
          </p>
        </div>
        <div className="text-[#212121] text-[16px] max-w-[650px] bg-yellow-100 p-6">
          <h3 className="font-bold">Changing an Account</h3>
          <p>
            Changes happen. When they do, you can update, add, or discontinue
            account option(s), including bank information, dividend and/or
            capital gain distribution and payment options, and contact
            information.
          </p>
        </div>
        <div className="text-[#212121] text-[16px] max-w-[650px] bg-yellow-100 p-6">
          <h3 className="font-bold">Podcasts</h3>
          <p>
            Explore perspectives and insights from Franklin Templeton’s
            investment leaders. Tune in as we provide regular updates on
            developments shaping markets, industries and investment
            opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Explore;

const Feature = () => {
  return (
    <section className="w-full py-16">
      <div className="grid grid-cols-2 md:gap-20 container mx-auto">
        <div>
          <h2 className="text-4xl font-medium mb-6">
            Discover the Easiest Way <br />
            to Learn and Play
          </h2>
          <p>
            From selecting your favorite topics to tracking your progress, our{" "}
            <br />
            platform makes learning easy, fun, and effective.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-8 rounded-3xl bg-[#FBF9F9]">
            <div className="size-8 rounded-full flex items-center justify-center font-medium text-xl text-white bg-primary mb-4">
              1
            </div>
            <h4 className="text-xl font-semibold mb-2">Choose Your Topic</h4>
            <p>Select from a variety of categories.</p>
          </div>
          <div className="p-8 rounded-3xl bg-[#FBF9F9]">
            <div className="size-8 rounded-full flex items-center justify-center font-medium text-xl text-white bg-primary mb-4">
              2
            </div>
            <h4 className="text-xl font-semibold mb-2">Take the Quiz</h4>
            <p>Answer thoughtfully designed, interactive questions.</p>
          </div>
          <div className="p-8 rounded-3xl bg-[#FBF9F9]">
            <div className="size-8 rounded-full flex items-center justify-center font-medium text-xl text-white bg-primary mb-4">
              3
            </div>
            <h4 className="text-xl font-semibold mb-2">Get Instant Results</h4>
            <p>View your score immediately after completing the quiz.</p>
          </div>
          <div className="p-8 rounded-3xl bg-[#FBF9F9]">
            <div className="size-8 rounded-full flex items-center justify-center font-medium text-xl text-white bg-primary mb-4">
              4
            </div>
            <h4 className="text-xl font-semibold mb-2">Challenge Friends</h4>
            <p>
              Share your results and invite friends to compete on leaderboards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;

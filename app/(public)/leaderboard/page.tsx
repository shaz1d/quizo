import Leaderboard from "@/components/leaderboard";

const page = () => {
  return (
    <>
      <section className="bg-[#FBF9F9] rounded-[32px] container mx-auto py-20  px-8 text-center">
        <h1 className="text-6xl max-w-[620px] leading-[120%] mx-auto font-medium">
          Top Learners Worldwide
        </h1>
        <p className="pt-2 pb-4 max-w-3xl mx-auto">
          Check out the highest-scoring players across the globe. Compete
          globally and make your mark!
        </p>
      </section>
      <section className="container mx-auto max-w-lg py-20">
        <Leaderboard />
      </section>
    </>
  );
};

export default page;

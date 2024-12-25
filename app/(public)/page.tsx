import Leaderboard from "@/components/section/leaderboard";
import Feature from "@/components/section/feature";
import Hero from "@/components/section/hero";
import Review from "@/components/section/review";

export default async function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Leaderboard />
      <Review />
    </>
  );
}

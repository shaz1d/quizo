import Leaderboard from "@/components/section/leaderboard";
import Feature from "@/components/section/feature";
import Hero from "@/components/section/hero";
import Review from "@/components/section/review";

export default async function Home() {
  return (
    <main className="w-full container mx-auto">
      <Hero />
      <Feature />
      <Leaderboard />
      <Review />
    </main>
  );
}

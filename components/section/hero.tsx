import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-slate-200 rounded-[32px] container mx-auto py-20  px-8 text-center">
      <div className="flex justify-center items-center">
        <Image src="/user-1.png" height={40} width={40} alt="user image" />
        <Image
          src="/user-2.png"
          className="-ml-4"
          height={40}
          width={40}
          alt="user image"
        />
        <Image
          src="/user-1.png"
          className="-ml-4"
          height={40}
          width={40}
          alt="user image"
        />
        <Image
          src="/user-2.png"
          className="-ml-4"
          height={40}
          width={40}
          alt="user image"
        />
        <p className="ml-2">
          <span className="text-xl font-semibold">100+</span> Users
        </p>
      </div>
      <h1 className="text-6xl max-w-[620px] leading-[120%] mx-auto font-medium">
        Challenge Your Mind, Master Any Topic!
      </h1>
      <p className="pt-2 pb-4 max-w-3xl mx-auto">
        Discover fun and engaging quizzes designed to sharpen your skills, boost
        your knowledge, and track your progress. Perfect for learning,
        competing, and growing—anytime, anywhere!
      </p>
      <div className="flex gap-2 justify-center mt-3">
        <Link href="/quiz">
          <Button size="lg">Play Now</Button>
        </Link>
        <Link href="/leaderboard">
          <Button variant="outline" size="lg">
            Leaderboard
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

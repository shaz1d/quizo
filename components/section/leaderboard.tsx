import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Leaderboard = () => {
  return (
    <section className="w-full py-20">
      <div className="grid grid-cols-2 gap-20 ">
        <div className="flex justify-center items-center">
          <Image
            src="/leaderboard.png"
            height={600}
            width={400}
            alt="Leaderboard Image"
            quality={100}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-medium mb-6">
            Showcase Your Skills by <br />
            Climbing up the Leaderboard
          </h2>
          <p>
            Compete with friends and learners worldwide to secure your spot{" "}
            <br />
            at the top of the leaderboard.
          </p>
          <div className="flex items-center gap-2 mt-5">
            <Link href="/leaderboard">
              <Button>Leaderboard</Button>
            </Link>
            <Link href="/quiz">
              <Button variant="outline">Play Quiz</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;

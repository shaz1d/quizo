import Link from "next/link";
import { Button } from "../ui/button";
import { Star, StarIcon } from "lucide-react";

const Feature = () => {
  return (
    <section className="w-full py-16">
      <div className="grid grid-cols-2 gap-10 md:gap-20 container mx-auto">
        <div className="flex flex-col gap-5 md:gap-20">
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
          <div className="flex gap-3 items-center">
            <div className="size-10 rounded-sm bg-orange-400 flex items-center justify-center">
              <StarIcon />
            </div>
            <p className="text-muted-foreground text-lg">
              Rated <strong className="text-foreground">4.5/5</strong> from over{" "}
              <strong className="text-foreground">50</strong> Reviews.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="p-8 rounded-3xl bg-slate-200">
            <div className="size-8 rounded-full flex items-center justify-center font-medium text-xl text-white bg-primary mb-4">
              1
            </div>
            <h4 className="text-xl font-semibold mb-2">Choose Your Topic</h4>
            <p>Select from a variety of categories.</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-200">
            <div className="size-8 rounded-full flex items-center justify-center font-medium text-xl text-white bg-primary mb-4">
              2
            </div>
            <h4 className="text-xl font-semibold mb-2">Take the Quiz</h4>
            <p>Answer thoughtfully designed, interactive questions.</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-200">
            <div className="size-8 rounded-full flex items-center justify-center font-medium text-xl text-white bg-primary mb-4">
              3
            </div>
            <h4 className="text-xl font-semibold mb-2">Get Instant Results</h4>
            <p>View your score immediately after completing the quiz.</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-200">
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

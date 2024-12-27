import { truncateEmail } from "@/lib/utils";
import { Icons } from "../icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Review = () => {
  const reviews = [
    {
      name: "Sarah Williams",
      email: "sarah.williams@email.com",
      review:
        "Quizo is a fun, straightforward quiz platform! I enjoy the challenge of competing on the leaderboard and earning scores with each quiz.",
      profileImage: "/user-1.png",
    },
    {
      name: "Mark Thompson",
      email: "mark.thompson@email.com",
      review:
        "Quizo is a solid quiz app. It’s easy to use and fun to see your score rise as you play. However, the quizzes could use more variety in difficulty—some are too easy, others too hard.",
      profileImage: "/user-2.png",
    },
    {
      name: "Emma Clark",
      email: "emma.clark@email.com",
      review:
        "I love Quizo! It’s simple, fun, and perfect for competing with friends. The leaderboard adds a fun competitive element.",
      profileImage: "/user-1.png",
    },
    {
      name: "Jason Lee",
      email: "jason.lee@email.com",
      review:
        "Quizo is a great way to test your knowledge while having fun. The quizzes are quick, and the leaderboard makes it exciting to compete.",
      profileImage: "/user-2.png",
    },
    {
      name: "Olivia Davis",
      email: "olivia.davis@email.com",
      review:
        "Quizo is simple but effective. I love playing the quizzes and watching my scores climb the leaderboard.",
      profileImage: "/user-1.png",
    },
    {
      name: "Alex Carter",
      email: "alex.carter@email.com",
      review:
        "Quizo is perfect for anyone who loves quizzes. The competitive element of the leaderboard keeps me coming back. ",
      profileImage: "/user-2.png",
    },
  ];

  return (
    <section className="w-full py-20">
      <h2 className="text-4xl font-medium mb-10 text-center capitalize max-w-md mx-auto">
        What Users Say about the platform
      </h2>

      <div className="w-full overflow-hidden flex -mx-5">
        <div className="flex gap-5 px-[10px] animate-linear-slide">
          {reviews.map((review, i) => {
            return (
              <div
                key={i}
                className="p-8 rounded-3xl bg-slate-200 w-[300px] flex flex-col justify-between"
              >
                <p className="text-xl font-medium mb-10">{review.review}</p>
                <div className="flex justify-between items-center gap-4">
                  <div className="flex gap-2 items-center">
                    <Avatar>
                      <AvatarImage src={review.profileImage} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{review.name}</p>
                      <p className="text-xs truncate text-muted-foreground">
                        {truncateEmail(review.email, 16)}
                      </p>
                    </div>
                  </div>
                  <Icons.quote className="size-8" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-5 px-[10px] animate-linear-slide">
          {reviews.map((review, i) => {
            return (
              <div
                key={i}
                className="p-8 rounded-3xl bg-slate-200 w-[300px] flex flex-col justify-between"
              >
                <p className="text-xl font-medium mb-10">{review.review}</p>
                <div className="flex justify-between items-center gap-4">
                  <div className="flex gap-2 items-center">
                    <Avatar>
                      <AvatarImage src={review.profileImage} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{review.name}</p>
                      <p className="text-xs truncate text-muted-foreground">
                        {truncateEmail(review.email, 16)}
                      </p>
                    </div>
                  </div>
                  <Icons.quote className="size-8" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Review;

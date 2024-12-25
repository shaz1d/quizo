import { Icons } from "../icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Review = () => {
  return (
    <section className="w-full py-20">
      <h2 className="text-4xl font-medium mb-10 text-center">
        What Users Say about the platform
      </h2>

      <div className="w-full overflow-hidden flex">
        <div className="grid grid-cols-4 gap-5">
          <div className="p-8 rounded-3xl bg-slate-200">
            <p className="text-xl font-medium mb-10">
              The quizzes are so much fun and cover a wide range of topics. I’ve
              learned more in a week here than I did in a month elsewhere!
            </p>
            <div className="flex justify-between gap-4">
              <div className="flex gap-2 items-center">
                <Avatar>
                  <AvatarImage src="/user-1.png" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">User Name</p>
                  <p className="text-sm text-muted-foreground">
                    info.user@gmail.com
                  </p>
                </div>
              </div>
              <Icons.quote className="size-10" />
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-slate-200">
            <p className="text-xl font-medium mb-10">
              The quizzes are so much fun and cover a wide range of topics. I’ve
              learned more in a week here than I did in a month elsewhere!
            </p>
            <div className="flex justify-between gap-4">
              <div className="flex gap-2 items-center">
                <Avatar>
                  <AvatarImage src="/user-1.png" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">User Name</p>
                  <p className="text-sm text-muted-foreground">
                    info.user@gmail.com
                  </p>
                </div>
              </div>
              <Icons.quote className="size-10" />
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-slate-200">
            <p className="text-xl font-medium mb-10">
              The quizzes are so much fun and cover a wide range of topics. I’ve
              learned more in a week here than I did in a month elsewhere!
            </p>
            <div className="flex justify-between gap-4">
              <div className="flex gap-2 items-center">
                <Avatar>
                  <AvatarImage src="/user-1.png" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">User Name</p>
                  <p className="text-sm text-muted-foreground">
                    info.user@gmail.com
                  </p>
                </div>
              </div>
              <Icons.quote className="size-10" />
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-slate-200">
            <p className="text-xl font-medium mb-10">
              The quizzes are so much fun and cover a wide range of topics. I’ve
              learned more in a week here than I did in a month elsewhere!
            </p>
            <div className="flex justify-between gap-4">
              <div className="flex gap-2 items-center">
                <Avatar>
                  <AvatarImage src="/user-1.png" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">User Name</p>
                  <p className="text-sm text-muted-foreground">
                    info.user@gmail.com
                  </p>
                </div>
              </div>
              <Icons.quote className="size-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

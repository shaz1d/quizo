import { getTopPlayers } from "@/lib/actions";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";

const Leaderboard = async () => {
  const topPlayers = await getTopPlayers();
  return (
    <ScrollArea className="px-8 h-72">
      <div className="flex flex-col gap-3">
        {topPlayers.map((player, index) => {
          if (index === 0) {
            return (
              <div key={player.id} className="flex flex-col items-center mb-4">
                <div className="relative pt-4">
                  <Image
                    src="/crown.png"
                    className="absolute top-[1px] -right-4 rotate-[45deg]"
                    height={40}
                    width={40}
                    quality={100}
                    alt=""
                  />
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={player.image as string} />
                    <AvatarFallback>{player.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>

                <p className="text-lg font-semibold mt-1">{player.name}</p>
                <p className="bg-primary rounded-full text-white text-sm px-3 py-1 mt-1">
                  Score:{player.score}
                </p>
              </div>
            );
          } else {
            return (
              <div
                key={player.id}
                className="flex items-center justify-between p-3 rounded-lg shadow-sm"
              >
                <div className="flex gap-3 items-center">
                  <Avatar>
                    <AvatarImage src={player.image as string} />
                    <AvatarFallback>{player.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-md font-medium ">{player.name}</p>
                    <p className="text-xs text-gray-500">
                      Score: {player.score}
                    </p>
                  </div>
                </div>
                <div className="size-5 rounded-full text-sm font-semibold bg-primary text-white flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
            );
          }
        })}
      </div>
    </ScrollArea>
  );
};

export default Leaderboard;

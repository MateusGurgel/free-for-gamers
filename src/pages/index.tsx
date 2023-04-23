import randomIntFromInterval from "@/services/randomIntFromInterval";
import { Flex, SimpleGrid, Skeleton, Stack } from "@chakra-ui/react";
import { CategoryBadge } from "@/components/categoryBadge";
import { gameGenres } from "@/services/gameGenres";
import { GameCard } from "@/components/GameCard";
import { useEffect, useState } from "react";
import fetcher from "@/fecher";
import Game from "@/services/game";
import useSWR from "swr";
import { SkeletonGameCard } from "@/components/SkeletonGameCard";

export default function Home() {
  const [gameList, setGameList] = useState<Game[]>([]);

  const { data, isLoading } = useSWR("/api/getRandomGamesList", fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: true,
    refreshWhenHidden: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
  });

  useEffect(() => {
    setGameList(data);
    console.log("Mudou!");
  }, [data]);

  return (
    <Stack gap={2}>
      <Flex wrap="wrap" gap={2} justify="center">
        {gameGenres.map((category, index) => (
          <CategoryBadge key={index} category={category} />
        ))}
      </Flex>

      <Flex justify="center">
        <SimpleGrid columns={3} spacing={5}>
          {!isLoading ? (
            gameList &&
            gameList.map((game) => (
              <GameCard
                key={game.id}
                category={game.genre}
                name={game.title}
                description={game.short_description}
                imageUrl={game.thumbnail}
              />
            ))
          ) : (
            <>
              <SkeletonGameCard />
              <SkeletonGameCard />
              <SkeletonGameCard />

              <SkeletonGameCard />
              <SkeletonGameCard />
              <SkeletonGameCard />

              <SkeletonGameCard />
              <SkeletonGameCard />
              <SkeletonGameCard />
            </>
          )}
        </SimpleGrid>
      </Flex>
    </Stack>
  );
}

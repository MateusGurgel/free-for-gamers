import { SkeletonGameCard } from "@/components/SkeletonGameCard";
import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import { CategoryBadge } from "@/components/categoryBadge";
import { gameGenres } from "@/services/gameGenres";
import { GameCard } from "@/components/GameCard";
import { useEffect, useState } from "react";
import Game from "@/services/game";
import fetcher from "@/fecher";
import useSWR from "swr";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [gameList, setGameList] = useState<Game[]>([]);

  const { data, isLoading } = useSWR("/api/getRandomGamesList", fetcher, {
    revalidateOnFocus: false,
    refreshWhenHidden: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
  });

  async function loadMoreGames() {
    const newItems = await fetcher("/api/getRandomGamesList");
    setGameList((prevItems) => [...prevItems, ...newItems]);
  }

  useEffect(() => {
    setGameList(data);
  }, [data]);

  return (
    <Stack gap={2}>
      <Flex wrap="wrap" gap={2} justify="center">
        {gameGenres.map((category, index) => (
          <CategoryBadge key={index} category={category} />
        ))}
      </Flex>

      <Flex justify="center">
        {!isLoading && gameList ? (
          <InfiniteScroll
            dataLength={gameList.length | 0}
            next={loadMoreGames}
            hasMore={true}
            loader={<div>Loading...</div>}
            scrollableTarget={false}
          >
            <SimpleGrid columns={3} spacing={5}>
              {gameList.map((game, index) => (
                <GameCard
                  key={game.id + game.game_url + index}
                  category={game.genre}
                  name={game.title}
                  description={game.short_description}
                  imageUrl={game.thumbnail}
                />
              ))}
            </SimpleGrid>
          </InfiniteScroll>
        ) : (
          <SimpleGrid columns={3} spacing={5}>
            {[...Array(9)].map((_, i) => (
              <SkeletonGameCard key={i} />
            ))}
          </SimpleGrid>
        )}
      </Flex>
    </Stack>
  );
}

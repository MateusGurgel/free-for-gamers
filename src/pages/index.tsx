import { SkeletonGameCard } from "@/components/SkeletonGameCard";
import { getRandomGameList } from "@/services/getRandomGameList";
import InfiniteScroll from "react-infinite-scroll-component";
import { Flex, SimpleGrid, Spinner, Stack } from "@chakra-ui/react";
import { CategoryBadge } from "@/components/categoryBadge";
import { gameGenres } from "@/services/gameGenres";
import { GameCard } from "@/components/GameCard";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Game from "@/services/game";
import fetcher from "@/fecher";
import useSWR from "swr";

export default function Home() {
  const [gameList, setGameList] = useState<Game[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const { data, isLoading } = useSWR("/api/getRandomGamesList", fetcher, {
    revalidateOnFocus: false,
    refreshWhenHidden: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
  });

  async function loadMoreGames(category?: string) {
    const gameList = await getRandomGameList(category);
    setGameList((prevItems) => [...prevItems, ...gameList]);
  }

  async function selectCategoty(categoty: string) {
    setGameList([]);

    if (categoty === selectedCategory) {
      loadMoreGames();
      setSelectedCategory("");
      return;
    }

    loadMoreGames(categoty);
    setSelectedCategory(categoty);
  }

  useEffect(() => {
    setGameList(data);
  }, [data]);

  return (
    <AnimatePresence mode="wait">
      <Stack gap={2}>
        <Flex wrap="wrap" gap={2} justify="center">
          {gameGenres.map((category, index) => (
            <CategoryBadge
              onSelect={selectCategoty}
              selected={category === selectedCategory}
              key={index}
              category={category}
            />
          ))}
        </Flex>

        <Flex justify="center">
          {!isLoading && gameList ? (
            <InfiniteScroll
              dataLength={gameList.length | 0}
              next={() => loadMoreGames(selectedCategory)}
              hasMore={true}
              loader={Loader()}
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
            GameCardsPlaceHolder()
          )}
        </Flex>
      </Stack>
    </AnimatePresence>
  );

  function GameCardsPlaceHolder() {
    return (
      <SimpleGrid columns={3} spacing={5}>
        {[...Array(9)].map((_, i) => (
          <SkeletonGameCard key={i} />
        ))}
      </SimpleGrid>
    );
  }
}
function Loader() {
  return (
    <Flex height={"100%"} align={"center"} justify={"center"} padding={3}>
      <Spinner size="xl" color="brand" />
    </Flex>
  );
}

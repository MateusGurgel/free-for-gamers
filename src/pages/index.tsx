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

  const { data } = useSWR("/api/getRandomGamesList", fetcher, {
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
              selected={category === selectedCategory}
              onSelect={selectCategoty}
              category={category}
              key={index}
            />
          ))}
        </Flex>

        <Flex justify="center">
          {gameList ? (
            <InfiniteScroll
              next={() => loadMoreGames(selectedCategory)}
              dataLength={gameList.length | 0}
              loader={Loader()}
              hasMore
            >
              {GameCardGrid(gameList)}
            </InfiniteScroll>
          ) : (
            GameCardGridPlaceHolder(9)
          )}
        </Flex>
      </Stack>
    </AnimatePresence>
  );
}

function GameCardGridPlaceHolder(numberOfCards: number) {
  return (
    <SimpleGrid columns={3} spacing={5}>
      {[...Array(numberOfCards)].map((_, i) => (
        <SkeletonGameCard key={i} />
      ))}
    </SimpleGrid>
  );
}

function GameCardGrid(gameList: Game[]) {
  return (
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
  );
}

function Loader() {
  return (
    <Flex height={"100%"} align={"center"} justify={"center"} padding={3}>
      <Spinner size="xl" color="brand" />
    </Flex>
  );
}

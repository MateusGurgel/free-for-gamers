import { GameCard } from "@/components/GameCard";
import { CategoryBadge } from "@/components/categoryBadge";
import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import useSWR from 'swr'

const gameGenres: string[] = [
  "mmorpg",
  "shooter",
  "strategy",
  "moba",
  "racing",
  "sports",
  "social",
  "sandbox",
  "open-world",
  "survival",
  "pvp",
  "pve",
  "pixel",
  "voxel",
  "zombie",
  "turn-based",
  "first-person",
  "third-person",
  "top-down",
  "tank",
  "space",
  "sailing",
  "side-scroller",
  "superhero",
  "permadeath",
  "card",
  "battle-royale",
  "mmo",
  "mmofps",
  "mmotps",
  "3d",
  "2d",
  "anime",
  "fantasy",
  "sci-fi",
  "fighting",
  "action-rpg",
  "action",
  "military",
  "martial-arts",
  "flight",
  "low-spec",
  "tower-defense",
  "horror",
  "mmorts",
];

export default function Home() {

  return (
    <Stack gap={2}>
      <Flex wrap="wrap" gap={2} justify="center">
        {gameGenres.map((category, index) => (
          <CategoryBadge key={index} category={category} />
        ))}
      </Flex>

      <Flex justify="center">
        <SimpleGrid columns={3} spacing={5}>
          <GameCard category="Programmer" name="Genius!" description="Brabo" imageUrl="https://bit.ly/dan-abramov" />
        </SimpleGrid>
      </Flex>
    </Stack>
  );
}

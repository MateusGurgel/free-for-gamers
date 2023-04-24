import fetcher from "@/fecher";

export async function getRandomGameList(category?: string) {
  let URL = "/api/getRandomGamesList?";

  if (category) {
    URL += `category=${category}`;
  }

  const gameList = await fetcher(URL);

  return gameList;
}

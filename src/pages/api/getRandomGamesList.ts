import { NextApiRequest, NextApiResponse } from 'next'
import matrixToArray from '@/services/matrixToArray';
import fetcher from '@/fecher';
import randomIntFromInterval from '@/services/randomIntFromInterval';
import Game from '@/services/game';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { category } = req.query

    let URL = "https://www.freetogame.com/api/games?"

    if(category){
        URL += `category=${category}`
    }

    const gamesMatrix = await fetcher(URL);
    const gamesArray = matrixToArray(gamesMatrix);

    let randomGames: Game[] = [];

    for (let index = 0; index < 9; index++) {
        let randomNumber = randomIntFromInterval(0, gamesArray.length - 1);
        const randomGame = gamesArray[randomNumber];
        randomGames.push(randomGame);
    }
  

    res.status(200).json(randomGames)
}
